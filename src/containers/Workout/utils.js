import * as posenet from '@tensorflow-models/posenet'
import { findAngle } from "./algorithms/calculateElbowAngle";

const pointRadius = 3

export const config = {
  videoWidth: 900,
  videoHeight: 700,
  flipHorizontal: true,
  algorithm: 'single-pose',
  showVideo: true,
  showSkeleton: true,
  showPoints: true,
  minPoseConfidence: 0.1,
  minPartConfidence: 0.5,
  maxPoseDetections: 2,
  nmsRadius: 20,
  outputStride: 16,
  imageScaleFactor: 0.5,
  skeletonColor: '#ffadea',
  skeletonLineWidth: 6,
  loadingText: 'Loading...please be patient...'
}

function toTuple({x, y}) {
  return [x, y]
}

export function drawKeyPoints(
  keypoints,
  minConfidence,
  skeletonColor,
  canvasContext,
  scale = 1
) {
  keypoints.forEach(keypoint => {
    if (keypoint.score >= minConfidence) {
      const {x, y} = keypoint.position
      canvasContext.beginPath()
      canvasContext.arc(x * scale, y * scale, pointRadius, 0, 2 * Math.PI)
      canvasContext.fillStyle = skeletonColor
      canvasContext.fill()
    }
  })
}

export function drawSegment(
  [firstX, firstY],
  [nextX, nextY],
  color,
  lineWidth,
  scale,
  canvasContext
) {
  canvasContext.beginPath()
  canvasContext.moveTo(firstX * scale, firstY * scale)
  canvasContext.lineTo(nextX * scale, nextY * scale)
  canvasContext.lineWidth = lineWidth
  canvasContext.strokeStyle = color
  canvasContext.stroke()
}

export function drawAngle(A, B, C, canvasContext) {
  drawArc(
    toTuple(B),
    toTuple(A),
    toTuple(C),
    "#ffffff",
    5,
    1,
    canvasContext
  )
  // canvasContext.arc(B.x-20, B.y, 10, 0, 2 * Math.PI, false);
  // canvasContext.fillStyle = '#00000080';
  // canvasContext.fill();
  canvasContext.font = "normal 18px Sans";
  canvasContext.fillStyle = "#ffffff";
  canvasContext.fillText(Math.round(findAngle(A, B, C)), B.x-20, B.y-20);
}

function drawArc(
  [x, y],
  [x1, y1],
  [x2, y2],
  color,
  lineWidth,
  scale,
  canvasContext
) {
  
  let startingAngle = Math.atan2(y1-y, x1-x);
  let endingAngle = Math.atan2(y2-y, x2-x);
  console.log("drawn", x, y, startingAngle, endingAngle)
  canvasContext.beginPath()
  canvasContext.arc(x * scale, y * scale, 20, startingAngle, endingAngle);
  canvasContext.lineWidth = lineWidth
  canvasContext.strokeStyle = color
  canvasContext.stroke()
}

export function drawSkeleton(
  keypoints,
  minConfidence,
  color,
  lineWidth,
  canvasContext,
  scale = 1
) {
  const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
    keypoints,
    minConfidence
  )

  adjacentKeyPoints.forEach(keypoints => {
    drawSegment(
      toTuple(keypoints[0].position),
      toTuple(keypoints[1].position),
      color,
      lineWidth,
      scale,
      canvasContext
    )
  })
}