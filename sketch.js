var blueB,greenB,yellowB,arrowGroup,scene,bow,gameState,score,select_balloon



function preload(){
  scene = loadImage("download.png");
  bow = loadImage("bow.png");
  

}

function setup() {
  createCanvas(400, 400);
  
//create a scene sprite
scene_sp = createSprite(380,50,400,400);
bow_sp = createSprite(380, 200,20,70);
  
  
blueB = createGroup();
greenB = createGroup();
yellowB = createGroup();
arrowGroup = createGroup();
  
gameState=0;
  
  textSize(20);
  score = 0;
  
  scene_sp.addImage(scene);
  bow_sp.addImage(bow);
}



function draw() {
  // background(10);

scene.velocityX = -2;
scene.scale=2;
  
bow_sp.y = World.mouseY;
  edge = createEdgeSprites();
  bow_sp.collide(edge[0]);
  
  scene_sp.velocityX = -2;
  if (gameState===0){
  if (scene_sp.x <0) {
    scene_sp.x = scene_sp.width/2;
  }
  
  select_balloon = random(1,3);
  
  if (World.frameCount % 80 == 0) {
    } if (select_balloon == 1) {
      greenBalloon();
    } else if (select_balloon == 2) {
      blueBalloon();
    } else {
      yellowBalloon();
    }
  
  if (keyDown("space")) {
    createArrow();
    //playSound("sound://category_swish/arrow_fly_pass_by_3.mp3");
  }
  
  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
    //playSound("sound://category_accent/puzzle_game_accent_bubble_05.mp3");
  }
  
  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score+3;
    //playSound("sound://category_accent/puzzle_game_accent_bubble_05.mp3");
  }
  
  if (arrowGroup.isTouching(yellowB)) {
    yellowB.destroyEach();
    arrowGroup.destroyEach();
    score = score+4;
   // playSound("sound://category_accent/puzzle_game_accent_bubble_05.mp3");
    
  }
  if (score===20 || blueBalloon.x>400||greenBalloon.x>400||yellowBalloon.x>400){
    gameState=1;
    scene.velocityX=0;
    blueBalloon.velocityX=0;
    greenBalloon.velocityX=0;
    yellowBalloon.velocityX=0;
    bow.velocityY=0;
  }

  
  }
  drawSprites();
  
  fill("Black");
   text("Score : "+score,270,30);
   
  
}


function blueBalloon() {
  if(World.frameCount% 80===0){
  var blue = createSprite(0,370, 10, 10);
  blue.addAnimation("monster_10_1");
  blue.scale=0.5;
  blue.velocityX = 3;
  blue.lifetime = 150;
  blueB.add(blue);
}
}

function greenBalloon() {
  if(World.frameCount% 80===0){
  var green = createSprite(0,370, 10, 10);
  green.addAnimation("monster_17_1");
  green.scale=0.5;
  green.velocityX = 3;
  green.lifetime = 150;
  greenB.add(green);
}
}
function yellowBalloon() {
  if(World.frameCount% 80===0){
  var yellow = createSprite(0,370, 10, 10);
  yellow.addAnimation("monster_02_1");
  yellow.scale=0.5;
  yellow.velocityX = 3;
  yellow.lifetime = 150;
  yellowB.add(yellow);
}
  
}

function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addAnimation("arrow");
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrowGroup.add(arrow);
  
}
