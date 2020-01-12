import { drawAngle } from "../utils.js";

export default function calculateElbowAngle(pose, canvasContext) {
  const leftShoulder = getItemFromName(pose, "leftShoulder");
  const leftElbow = getItemFromName(pose, "leftElbow");
  const leftWrist = getItemFromName(pose, "leftWrist");

  const rightShoulder = getItemFromName(pose, "rightShoulder");
  const rightElbow = getItemFromName(pose, "rightElbow");
  const rightWrist = getItemFromName(pose, "rightWrist");

  drawAngle(leftShoulder.position, leftElbow.position, leftWrist.position, canvasContext)
  drawAngle(rightWrist.position, rightElbow.position, rightShoulder.position, canvasContext)


  return findAngle(leftShoulder.position, leftElbow.position, leftWrist.position);
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