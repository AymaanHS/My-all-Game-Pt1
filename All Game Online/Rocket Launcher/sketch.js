// The story of my game is:-                  (You can read the Story in Story.js file as well)

// One fine day, There was a boy in Noida. 
// He woke up early in the morning to go to school. He saw that his father was not ready to go to office and
//  instead watcing, so he asked his father that why was'nt he ready to go to office? His father replied that
// Today, the whole India is sitting home and waiting for the launch. The kid got confused that what is he 
// talking about? His father explained that India is launcing its first Rocket, so whole india is off today
// and waiting for the launch. 10 mins before launch every channel on TV will highlight it and show you the
// live telecast of it. 

// At night, the kid got a dream that he is flying the rocket in space and suddenly a space storm comes and 
// he have to protect the rocket otherwise the rocket would crash.

//      PLAY the Game and help the kid save from being crashed.

//            RULES                             (You can also read it in Rules.js file.)                       

// So here are the Controls of the Game:-
// By pressing the SPACE key, rocket's speed would increae nut as soon as you stop pressing space key it will fell down your game would be Over.
// To move rocket left or right, use ARROW keys.

// This game does not require mouse to play, just by keys.

// Score will keep increasing until the game is over. It will calculate distance traveled by the rocket.
    
 
//               DOUBTS or PROBLEMS      (For Teacher)
//   1. As soon as rocket touches the stone, the gameState is not changing to END.
//   2. The distance traveling is not showing but as soon as gameState changes to end, it is visible. That means that the distance is being calculated behind the space Img.

//                 Made By AYMAAN HAIDER SAIYAD

    var PLAY=1;
    var END=0;
    var gameState=PLAY;

    var distance=0;

    var rocket,rocketImg;
    var space,spaceImg;
    var stone,stoneImg;

    var stoneG;

function preload(){

    rocketImg = loadImage("rocket.png");
    spaceImg = loadImage("Space.png");
    stoneImg = loadImage("stone.png");
}

function setup() {
 
    createCanvas(600,600);

    distance=0;

    space = createSprite(300,300);
    space.addImage(spaceImg);

    stoneG = new Group();
    
    rocket = createSprite(300,400);
    rocket.addImage(rocketImg);
    rocket.scale=0.2;

    

}

function draw() {
    background("black");  
    
    

    if(gameState===PLAY){
    distance = distance + Math.round(getFrameRate()/60);

    space.velocityY=1; 

    spawnStone();

    if(space.y > 325){
        space.y = 300;
    }

    rocket.velocityY=rocket.velocityY+0.5;

    if(keyDown("SPACE")){
        rocket.velocityY=-5;
    }

    if(keyDown("LEFT_ARROW")){
        rocket.x=rocket.x-3;
    }

    if(keyDown("RIGHT_ARROW")){
        rocket.x=rocket.x+3;
    }

    if(stoneG.isTouching(rocket))
    {
        rocket.velocityY=0;
    }
    drawSprites();

   
    if(rocket.isTouching(stoneG) || (rocket.y>645)){
        gameState=END;
        rocket.destroy();
    }
    }

    if(gameState===END){
        stroke("yellow");
        fill("yellow"); 
        textSize(30);
        text("Game Over!",200,300);
    }
    stroke("yellow");
    fill("yellow"); 
    textSize(21);
    text("distance: "+ distance, 450,50);
}

    function spawnStone(){

        if(frameCount%310 === 0){
            
            stone = createSprite(200,-50);
            stone.addImage(stoneImg);
            stone.velocityY= 1;
            stone.x=Math.round(random(120,400))
            stone.lifetime=700;
            stone.scale=0.2;

            rocket.depth = stone.depth;
            rocket.depth+= 2;

            stoneG.add(stone);

            }        
        }