import { drawAngle } from "../utils.js";

export default function calculateKneeAngle(pose, canvasContext) {
  const leftHip = getItemFromName(pose, "leftHip");
  const leftKnee = getItemFromName(pose, "leftKnee");
  const leftAnkle = getItemFromName(pose, "leftAnkle");

  const rightHip = getItemFromName(pose, "rightHip");
  const rightKnee = getItemFromName(pose, "rightKnee");
  const rightAnkle = getItemFromName(pose, "rightAnkle");

  drawAngle(leftAnkle.position, leftKnee.position, leftHip.position, canvasContext)
  drawAngle(rightHip.position, rightKnee.position, rightAnkle.position, canvasContext)


  return findAngle(rightHip.position, rightKnee.position, rightAnkle.position);
}

function getItemFromName(pose, bodyPart) {
  for(let item of pose.keypoints) {
    if(item.part === bodyPart) {
      return item;
    }
  }
}

export function findAngle(A,B,C) {
  var AB = Math.sqrt(Math.pow(B.x-A.x,2)+ Math.pow(B.y-A.y,2));    
  var BC = Math.sqrt(Math.pow(B.x-C.x,2)+ Math.pow(B.y-C.y,2)); 
  var AC = Math.sqrt(Math.pow(C.x-A.x,2)+ Math.pow(C.y-A.y,2));
  return Math.acos((BC*BC+AB*AB-AC*AC)/(2*BC*AB))*180/Math.PI;
}