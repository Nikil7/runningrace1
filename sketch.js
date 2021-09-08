var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;

var racetrack;
var score = 0;
var runnerImg;
var runner;
var invTrack;
var barrierImg,barrier;

function preload(){
  racetrackImg = loadImage("./assets/racetrack.PNG");
  runnerImg = loadAnimation("./assets/runner1.png","./assets/runner2.png","./assets/runner3.png")
  barrierImg = loadImage("./assets/barrier1.png");
}

function setup() {
  createCanvas(800,400);

  runner = createSprite(200,250,50,50);
  runner.addAnimation("runner",runnerImg);
  runner.scale  = 0.4;
  runner.setCollider("circle",0,0,150);
  runner.debug = true;

  invTrack = createSprite(200,350,250,10);
  invTrack.visible = false;

  barriersGroup = new Group();

}

function draw() {

  background(racetrackImg);
  
  if (gameState===PLAY){

    if(keyDown("space")&& runner.y>250) {
      runner.velocityY = -15;
    }
       
    runner.velocityY = runner.velocityY + 0.8
    runner.collide(invTrack); 
    
  }


  spawnBarriers();
  drawSprites();
}

function spawnBarriers(){
  if(frameCount % 150 === 0){
    barrier = createSprite(800,340);
    barrier.velocityX = -5;
    barrier.addImage("barrier",barrierImg);
    barrier.scale = 0.2;
    barrier.lifetime = 300;

    barriersGroup.add(barrier);
  }
}