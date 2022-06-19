leftWristX="";
rightWristX="";
noseX="";
noseY="";
difference="";

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,450);
    canvas.position(590,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is Initialised")

}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
function draw(){
    background('grey');
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    fill('lightblue');
    stroke('black');
    square(noseX, noseY, difference);
}
