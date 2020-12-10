var END = 0;
var PLAY = 1;
var WIN = 2;

var gs;

var restart;
var restartImage;

var wall;
var wall2;
var wall3;
var wall4;

var robber;
var chaser;
var tunnel;

var obs;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
var obs7;

var Sobs;
var Sobs2;
var Sobs3;
var Sobs4;
var Sobs5;
var Sobs6;
var Sobs7;

function preload()
{
restartImage = loadImage("restart.png");  

}

function setup() 
{
createCanvas(windowWidth,windowHeight);
createEdgeSprites();
  
robber = createSprite(100,485,15,15);
chaser = createSprite(25,485,15,15);  
tunnel = createSprite(30,30,20,20);

restart = createSprite(295,100,40,40);  
  
wall = createSprite(1,250,4,500);  
wall2 = createSprite(599,250,4,500);  
wall3 = createSprite(300,1,600,4);    
wall4 = createSprite(300,499,600,4);    
  
obs = createSprite(200,450,500,10);
obs2 = createSprite(400,400,500,10);
obs3 = createSprite(200,350,500,10);
obs4 = createSprite(400,300,500,10);  
obs5 = createSprite(200,250,500,10);
obs6 = createSprite(400,200,500,10);  
obs7 = createSprite(200,150,500,10);  

Sobs = createSprite(530,450,50,10);
Sobs2 = createSprite(70,400,50,10);  
Sobs3 = createSprite(530,350,50,10);  
Sobs4 = createSprite(70,300,50,10);
Sobs5 = createSprite(530,250,50,10);  
Sobs6 = createSprite(70,200,50,10);
Sobs7 = createSprite(530,150,50,10); 
  
restart.addImage(restartImage);
restart.visible = false; 
robber.velocityX = 8;
 


  
gs = PLAY;  
}

function draw() 
{
background("purple");
chaser.shapeColor = "skyblue";
robber.shapeColor = "skyblue";  
tunnel.shapeColor = "black";  

if(chaser.isTouching(obs) || chaser.isTouching(obs2) || chaser.isTouching(obs3) || chaser.isTouching(obs4) || chaser.isTouching(obs5) || chaser.isTouching(obs6) || chaser.isTouching(obs7) || chaser.isTouching(Sobs) || chaser.isTouching(Sobs2) || chaser.isTouching(Sobs3) || chaser.isTouching(Sobs4) || chaser.isTouching(Sobs5) || chaser.isTouching(Sobs6) || chaser.isTouching(Sobs7) || chaser.isTouching(wall) || chaser.isTouching(wall2) || chaser.isTouching(wall3) || chaser.isTouching(wall4))
{
gs = END;     
}  

if(chaser.isTouching(robber))
{
gs = WIN;  
}  
 
if(robber.isTouching(tunnel))
{
robber.setVelocity(0,0);
chaser.setVelocity(0,0);  
gs = END;  
}  

if(gs === PLAY)
{
if(keyDown("right"))
{
chaser.velocityX = 6;  
}  
if(keyDown("left"))
{
chaser.velocityX = -6;  
}  
if(keyDown("up"))
{
chaser.velocityY = -6;  
}  
if(keyDown("down"))
{
chaser.velocityY = 6;  
}  
}

if(keyWentUp("right") || keyWentUp("left") || keyWentUp("up") || keyWentUp("down"))  
{
chaser.setVelocity(0,0);  
}  
  
if(frameCount === 60)
{
robber.setVelocity(0,-8);  
}  
if(frameCount === 67)
{
robber.setVelocity(-8,0);  
}  
if(frameCount === 136)
{
robber.setVelocity(0,-8);  
}    
if(frameCount === 142)
{
robber.setVelocity(8,0);  
}    
if(frameCount === 211)
{
robber.setVelocity(0,-8);  
}  
if(frameCount === 217)
{
robber.setVelocity(-8,0);  
}    
if(frameCount === 286)
{
robber.setVelocity(0,-8);  
}    
if(frameCount === 293)
{
robber.setVelocity(8,0);  
}    
if(frameCount === 361)
{
robber.setVelocity(0,-8);  
}    
if(frameCount === 368)
{
robber.setVelocity(-8,0);  
}    
if(frameCount === 437)
{
robber.setVelocity(0,-8);  
}    
if(frameCount === 443)
{
robber.setVelocity(8,0);  
}    
if(frameCount === 513)
{
robber.setVelocity(0,-8);  
}    
if(frameCount === 519)
{
robber.setVelocity(-8,0);  
}    
if(frameCount === 588)
{
robber.setVelocity(0,-8);  
}    
  
  
  
//gs = WIN;  
  
if(gs === WIN)
{
robber.setVelocity(0,0);
background("limegreen");
fill("black");
textSize(20);
text("You Win !",250,50)  
restart.visible = true;   
}
  

  
if(gs === END)
{
robber.setVelocity(0,0);  
background("red");  
textSize(20);
fill("black"); 
text("Game Over!",250,50); 
restart.visible = true;    
}  
  

if(gs === WIN || gs === END)
{
if (mousePressedOver(restart)) 
    {
      reset();
    }  
}  
  
  
console.log(frameCount); 
  
if(gs === PLAY)
{  
text("Chaser",chaser.x-20,chaser.y-12); 
text("Robber",robber.x-20,robber.y-12);   
text("Tunnel",tunnel.x-20,tunnel.y-15);  
}  
//text(gs,200,50);  

drawSprites();
}
  
function reset()
{
gs = PLAY;
background("purple")  
restart.visible = false; 

chaser.x = 25;
chaser.y = 485;
  
robber.x = 100;
robber.y = 485;
robber.velocityX = 8; 
  
frameCount = 0;  
}  