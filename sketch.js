var giraffeHead,giraffeNeck,giraffeBody;
var giraffeHeadImg,giraffeHead2Img,giraffeNeckImg,giraffeNeck2Img,giraffeBodyImg;
var fakeground;
var fruit,fruitsGroup;
var appleImg,ichigoImg,orangeImg,pineappleImg,pearImg,watermelonImg,grapeImg;
var junglebg;
var playbutton,playImg;


var PLAY = 1;
var SERVE = 0;
var END = 2;
var gameState = SERVE;

function preload(){
  junglebg = loadImage("jungle.PNG");
  
  giraffeHeadImg = loadImage("giraffehead.png")
  giraffeHead2Img = loadImage("giraffehead2.png")
  giraffeNeckImg = loadImage("giraffeneck.png")
  giraffeBodyImg = loadImage("giraffebody.png")
  giraffeBody2Img = loadImage("giraffebody2.png")
  
  appleImg = loadImage("apple.png")
  watermelonImg = loadImage("watermelon.png")
  orangeImg = loadImage("orange.png")
  pearImg = loadImage("pear.png")
  pineappleImg = loadImage("pineapple.png")
  grapeImg = loadImage("grape.png")
  ichigoImg = loadImage("ichigo.png")

  playImg = loadImage("play.png");
}

function setup() {
createCanvas(400,600);

fakeground = createSprite(0,505,800,10);
fakeground.visible = false ;

giraffeHead = createSprite(200,410,50,50);
giraffeHead.addImage(giraffeHeadImg);
giraffeHead.scale = 0.59;

giraffeNeck = createSprite(200.5,459,50,50);
giraffeNeck.addImage(giraffeNeckImg);
giraffeNeck.scale = 0.6;

giraffeBody = createSprite(200,520,50,50);
giraffeBody.addImage(giraffeBodyImg);
giraffeBody.scale = 0.6;

playbutton = createSprite(200,300,50,10);
playbutton.addImage(playImg);
playbutton.scale = 0.5;
playbutton.visible = false;

fruitsGroup = new Group();
}

function draw() {
background(junglebg);

for (var i = 0; i < 400; i=i+20) {
  line(i,450,i+10,450);
}

if(gameState === SERVE){
  playbutton.visible = true;
  
}

if(gameState === PLAY){
playbutton.visible = false;

if(keyDown(RIGHT_ARROW)){
  giraffeHead.x += 10;
  giraffeNeck.x += 10;
  giraffeBody.x += 10;
  giraffeHead.addImage(giraffeHeadImg);
  giraffeBody.addImage(giraffeBodyImg);
}

if(keyDown(LEFT_ARROW)){
  giraffeHead.x -= 10;
  giraffeNeck.x -= 10;
  giraffeBody.x -= 10;
  giraffeHead.addImage(giraffeHead2Img);
  giraffeBody.addImage(giraffeBody2Img);
}
SpawnFruits();

if(fruit.isTouching(fakeground)){
gameState = END;
}
}

drawSprites();
}

function SpawnFruits(){
if(frameCount % 60 === 0){
var fruit = createSprite(200,5,20,20);
fruit.x = Math.round(random(0,400));
fruit.velocityY = 5;

var rand = Math.round(random(1,7));
switch(rand) {
  case 1: fruit.addImage(appleImg);
          break;
  case 2: fruit.addImage(pearImg);
          break;
  case 3: fruit.addImage(pineappleImg);
          break;
  case 4: fruit.addImage(ichigoImg);
          break;
  case 5: fruit.addImage(orangeImg);
          break;
  case 6: fruit.addImage(watermelonImg);
          break;
  case 7: fruit.addImage(grapeImg);
  default: break;

}
}
}