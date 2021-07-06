var space_image;
var p_spaceShip, e_spaceShip, p_spaceShip_image, e_spaceShip_image;
var fire_ball_image, fire_ball;
var e_spaceShip_group;
var gameState;

function preload(){
  space_image = loadImage("space_image.png");
  p_spaceShip_image = loadImage("p_spaceship.png");
  e_spaceShip_image = loadImage("e_spaceship.png");
  fire_ball_image = loadImage("fire_ball.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2,windowHeight/2,innerWidth,innerHeight);
  bg.addImage(space_image);
  bg.scale = 5.9

  // Playing Character
  p_spaceShip = createSprite(90,400,50,50);
  p_spaceShip.addImage(p_spaceShip_image);
  p_spaceShip.scale = 0.25;
  
  // NPC
  e_spaceShip = createSprite(1000,400,50,50);
  e_spaceShip.addImage(e_spaceShip_image);
  e_spaceShip.scale = 0.1;

  gameState = 0;

}

function draw(){

  if (gameState === 0) {
    background("black");
    fill("red");
    textSize(25);
    strokeWeight(7);
    text("Hi Gamer,..",50,100)
    text("How are you? I hope You will be playing great....",50,150)
    text("This Game Story line as are follows:",50,200)
    text("Star Trek [Hero's spaceShip] was going in the space..Suddenly a small spaceShip came infront and crashed near by planet.",50,250)
    text("When crew of that Star Trek went near that they saw some pepole were injured. Crew of Star Trek helped them get up ",50,300)
    text("and and also gave them SPP Boster to heal Quickly, the crew asked what happen why you all landed like this.",50,350)
    text("They told that there planet is captured by a space monster. So, they are the only person to escape from his trap.",50,400)
    text("And his guard have attacked on 	them. The the leader of that crew decided to help them all and save their planet.",50,450)
    text("SO, they decided to fight with Zorad [Space Monster]. And then they started their Journey to that planet...... ",50,500)

    textSize(40);
    text("CAN ZORAD BE DEFEATED.... CAN THAT PLANET BE FREE.",50,600)
    textSize(25);
    text("Let's See....",50,650)
    textSize(15);
    text("Press ENTER to Start",1400,750)

    
    
  } 


  if(keyDown("ENTER")){
    gameState=1;
  }

  if(gameState === 1) {
    background(space_image);
    bg.depth = bg.depth - 1;
    bg.x -= 2 ;

    if(bg.x<1079/2){
      bg.x = windowWidth/2;
    }

    if(keyDown("UP_ARROW")){
      p_spaceShip.y = p_spaceShip.y-2; 
    }
    if(keyDown("DOWN_ARROW")){
      p_spaceShip.y = p_spaceShip.y+2; 
    }
    if(keyDown("SPACE")){
      bg.x -= 4 ; 
      
    }
    if(keyDown("F") && frameCount%20===0){
      fire();
    }


    drawSprites();
  }
}

function fire(){
  fire_ball = createSprite(90,p_spaceShip.y,50,50);
  fire_ball.addImage(fire_ball_image);
  fire_ball.scale = 0.10;
  fire_ball.velocityX = 5;
  
}