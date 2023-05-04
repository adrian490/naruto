noseX=0;
noseY=0;

left_eyeX=0;
left_eyeY=0;

right_eyeX=0;
right_eyeY=0;

function preload() {
  moustache_nose = loadImage('https://i.postimg.cc/nLQLp3JM/nariz-bigote-mario.png');
  moustache = loadImage('https://i.postimg.cc/RFVcC18H/bigote-mario.png');
  mario_hat = loadImage('https://i.postimg.cc/FRMxM8ZG/gorro-mario.png');

  naruto = loadImage("https://i.postimg.cc/g01fZppk/pngaaa-com-4288665.png");
   kunai = loadImage("https://i.postimg.cc/3xtPBpXR/kindpng-5031710.png");  
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO)
  video.size(300,300)
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("poseNet esta iniciando");
}

function gotPoses(results) {
  if(results.length > 0){
  console.log(results)
  noseX = results[0].pose.nose.x-30;
  noseY = results[0].pose.nose.y-50;

  left_eyeX = results[0].pose.leftEye.x-120;
   left_eyeY = results[0].pose.leftEye.y-180;
  }

}

function draw() {
  image(video,0,0,300,300);
  image(kunai, noseX, noseY, 90, 50);
  image(naruto, left_eyeX, left_eyeY, 200, 200);
  
}

function take_snapshot(){    
  save('myFilterImage.png');
}