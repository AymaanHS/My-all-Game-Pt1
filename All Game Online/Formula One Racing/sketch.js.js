var Ferrari,Formula,gameOver,LamboLambo,road;
var FerrariImg,FormulaImg,gameOverImg,LamboImg,roadImg;
var FerrariG, LamboG,FormulaG;
var FormulaSound;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
  FerrariImg = loadImage("Ferrari.png");
  FormulaImg = loadImage("Formula.png");
  LamboImg= loadImage("Lambo.png");
 
  FormulaSound = loadSound("Lamborhini Aventador Sound Effect.mp3");
  gameOverImg = loadImage("gameOver.png");
}

function setup(){
  
createCanvas(599,300);
// Moving background
road=createSprite(100,150);
road.addImage(roadImg);
road.velocityX = -5;

//creating boy running
Formula = createSprite(70,150);
Formula.addImage("Formula.png",FormulaImg);
Formula.scale=0.07;
  
//set collider for mainCyclist
Formula.setCollider("rectangle",-1,-1,60,140);
Formula.debug = true;
  
gameOver = createSprite(385,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  
  
FormulaG = new Group();
FerrariG = new Group();
LamboG = new Group();
  
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,450,30);
  
  if(gameState===PLAY){
    
   distance = distance + Math.round(getFrameRate()/50);
   road.velocityX = -(6 + 2*distance/150);
  
   FormulaG.y = World.mouseY;
  
   edges=createEdgeSprites();
   Formula.collide(edges);
  
  //code to reset the background
  if(road.x < 0 ){
    road.x = width/2;
  }
  
    //code to play cycle bell sound
  if(keyDown("space")) {
    FormulaSound.play();
  }
  
  //creating continous opponent players
  var select_oppPlayer = Math.round(random(1,3));
  
  if (World.frameCount % 150 == 0) {
    if (select_oppPlayer == 1) {
      LamboG();
    } else if (select_oppPlayer == 2) {
      FerrariG();
    }
  }
  
   if(LamboG.isTouching(FormulaG)){
     gameState = END;
     FormulaG.velocityY = 0;
     LamboG.velocityY = 0;
     FerrariG.velocityY = 0;
     road.velocityY = 0;
     gameOverImg = loadImage("gameOverImg");
    }
    
    if(FerrariG.isTouching(FormulaG)){
      gameState = END;
      FormulaG.velocityY = 0;
      LamboG.velocityY = 0;
      FerrariG.velocityY = 0;
      road.velocityY = 0;
      gameOverImg = loadImage("gameOverImg");
     }

    
}else if (gameState === END) {
    gameOver.visible = true;
    
  //Add code to show restart game instrution in text here
  Formula.addImage("Formula.png",FormulaImg);
  
  console.log("Restart Game");
  
    road.velocityX = 0;
    road.velocityY = 0;
    FormulaG.addImage("Formula.png",FormulaImg);
  
    FerrariG.setVelocityXEach(0);
    FerrariG.setLifetimeEach(-1);
  
    LamboG.setVelocityXEach(0);
    LamboG.setLifetimeEach(-1);

    FormulaG.setVelocityXEach(0);
    FormulaG.setLifetimeEach(-1);
    
    //write condition for calling reset( )
 if(mousePressedOver(gameOver))
       { 
         reset();
       
   }
}
}

function loadFormula(){
        Formula = createSprite(1100,Math.round(random(50, 250)));
        Formula.scale =0.06;
        Formula.velocityX = -(6 + 2*distance/150);
        Formula.addImage("Formula.png",FormulaImg);
        Formula.setLifetime=170;
        FormulaG.add(Formula);
}

function loadFerrari(){
        Ferrari.scale =0.06;
        Ferrari.velocityX = -(6 + 2*distance/150);
        Ferrari.addImage("Ferrari.png",FerrariImg);
        Ferrari.setLifetime=170;
        FerrariG.add(Ferrari);
}

function loadLambo(){
        Lambo =createSprite(1100,Math.round(random(50, 250)));
        Lambo.scale =0.06;
        Lambo.velocityX = -(6 + 2*distance/150);
        Lambo.addImage("Lambo.png",LamboImg);
        Lambo.setLifetime=170;
        LamboG.add(Lambo);
}

//create reset function here
function reset()
{
  gameState=PLAY;
  console.log("Restart Game");
  gameOver.visible = false;
  Formula.changeImage("Formula.png");
  FerrariG.destroyEach(); FormulaG.destroyEach(); LamboG.destroyEach();
 distance=0;
    Formula.addImage("Formula.png",FormulaImg); 
}




