var mario;
var platformGroup, obstacleGroup;
var marioAnimation, meteorAnimation, wallAnimation, groundAnimation;
var flag;
var LOSE=0;
var PLAY=1;
var WIN=2;
var gameState=PLAY;
var spaceship,spaceship_Img
function preload()
{
  marioAnimation=loadAnimation("images/Astro 1.png","images/Astro 2.png","images/Astro 3.png");
  obstacleAnimation=loadAnimation("images/obstacle1.png");
  wallAnimation=loadAnimation("images/wall.png");
  groundAnimation=loadAnimation("images/Surface1.jpg");  
  flagAnimation=loadAnimation("images/finalSpaceship.png");
  spaceship_Img=loadAnimation("images/spaceship_1.png");
  meteorAnimation=loadAnimation("images/meteor 1.png");

}

function setup() {
  //Creating canvas equal to width and height of display
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  var gap;
  
  //creating a player mario
  mario = new Player();
  
  //creating a group
  platformGroup= createGroup();
  obstacleGroup=createGroup();
  //adding platforms to stand for mario
  for (var i=0;i<26;i++)
	 {
     frameRate(30);
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);//Adding each new platform to platformGroup
      gap=random([5,10,50,100,200]);//givin randome value to gap
      countDistanceX = countDistanceX + platform.spt.width + gap; //counting x location of next platform to be build
      //adding wall to the game
      if(i%3===0)
      {
      spaceship=new Spaceship(countDistanceX);
      platformGroup.add(spaceship.spt);
      }
      //adding obstacles to the game
      
  }
  flag=createSprite(countDistanceX-150,height-200);
  flag.addAnimation("flagimg",flagAnimation);
  flag.scale=0.5;
  flag.setCollider("rectangle",0,0,1100,6520);
}

function draw() {
  background(rgb(9,18,45));
  fill("white");
  text(mouseX + ","+ mouseY,50,200);

  if(frameCount%50===0)
      {
      obstacle=new Obstacle(width-random([100,200,300]),10);
      obstacleGroup.add(obstacle.spt);
      console.log
      }
      
  //code to move the camera
  translate(  -mario.spt.x + width/2 , 0);
  if(gameState==PLAY)//Play state
  {  
       //changing the game states
       if(obstacleGroup.isTouching(mario.spt) || mario.spt.y>height)
       {  
         gameState=LOSE;
       } 
    
       if(flag.isTouching(mario.spt))
       {
          gameState=WIN;
       }
       //apply gravity to mario and set colliding with platforms
        mario.applyGravity();
        mario.spt.collide(platformGroup);
        
        //Calling various function to controll mario
        if (keyDown("left"))  
        { 
          mario.moveLeft();
        }
        if (keyDown("right")) 
        { 
          mario.moveRight();
        }
        if (keyDown("up") && mario.spt.velocityY===0) 
        {
          mario.jump();
        }


   }

  if(gameState==LOSE)//END State
  {  
    stroke("red");
    fill("red");
    textSize(40);
    text("GAME OVER",mario.spt.x,300);
    obstacleGroup.destroyEach();
    mario.spt.setVelocity(0,0);
    mario.spt.pause();
    
  }

  if(gameState==WIN)//WIN state
  {  
    stroke("green");
    fill("green");
    textSize(40);
    text("Winner",mario.spt.x,300);
    obstacleGroup.destroyEach();
    mario.spt.setVelocity(0,0);
    mario.spt.pause();
  }
  

   drawSprites();
}



