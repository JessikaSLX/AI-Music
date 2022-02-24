song1 = "";
song2 = "";
song3 = "";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy =  0;

function preload() {
   song1 = loadSound("LLITN.mp3");
   song2 = loadSound("EOY.mp3");
   song3 = loadSound("Senorita.mp3")
}

function setup() {
   canvas = createCanvas(500, 400);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded() {
   console.log("Pose Net is initialized");
 }

function draw() {
   image(video, 0, 0, 500, 400);
}

function gotPoses(results) {

   if (results.length > 0) {
     
      leftWristx = results[0].pose.leftWrist.x;
      leftWristy = results[0].pose.leftWrist.y;
      console.log("left wrist x = " + leftWristx + "left Wrist y = " + leftWristy);
      
      rightWristx = results[0].pose.rightWrist.x;
      rightWristy = results[0].pose.rightWrist.y;
      console.log("Right wrist x = " + rightWristx + "Right wrist y = " + rightWristy);
   }
}