var PLAY=1;
var END=0;
var gameState=PLAY;

var cat1,cat2,cat3,cat4,cat1Img,cat2Img,cat3Img,cat4Img;
var mouse1,mouse2,mouse3,mouse4,mouse1Img,mouse2Img,mouse3Img,mouse4Img;

var garden,gardenImg;

var bg,bgImg;

function preload() {
    
    mouseImg1 = loadAnimation("mouse1.png");
    mouseTeasing = loadAnimation("mouse2.png","mouse3.png");
    mouseStop = loadAnimation("mouse4.png");

    catImg1 = loadAnimation("cat1.png");
    catRunning = loadAnimation("cat2.png","cat3.png");
    catStop = loadAnimation("cat4.png");

    gardenImg = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,667);
    //create all sprites.

    bg = createSprite(500,330);
    bg.addImage(gardenImg);

    mouse1 = createSprite(150,550);
    mouse1.addAnimation("mouseStanding",mouseImg1);
    mouse1.scale=0.14;

    cat1 = createSprite(750,550);
    cat1.addAnimation("catStanding",catImg1);
    cat1.scale=0.14;
    

}

function draw() {
    background("garden");//255
    //Write condition here to evalute if tom and jerry collide

    if (cat1.x - mouse1.x < cat1.width/2 - mouse1.width/2){
        mouse1.addAnimation("mouseStop",mouseStop);
        cat1.addAnimation("catStop",catStop);
        
        mouse1.changeAnimation("mouseStop",mouseStop);
        cat1.changeAnimation("catStop",catStop);

        mouse1.scale = 0.15;
        cat1.scale = 0.15;

        cat1.velocityX = 0

        cat1.x = 250

       
    }   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW)
  {
      mouse1.addAnimation("mouseTeasing",mouseTeasing);
      mouse1.changeAnimation("mouseTeasing",mouseTeasing);
      mouse1.frameDelay = 25;

      cat1.addAnimation("catRunning",catRunning);
      cat1.changeAnimation("catRunning",catRunning);

      cat1.velocityX = -4;
  }

}
