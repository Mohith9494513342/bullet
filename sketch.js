var thickness,wall;
var bullet,speed,weight;
var bulletRightEdge,wallLeftEdge;
var lbullet,lwall;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(1400,100,50,50);
  
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  speed=random(223,321); 
  thickness=random(22,83);
  weight=random(30,52);
 
}

function draw() {
  background("black"); 


bullet.velocityX=speed;

if(hasCollide(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

function hasCollide(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){

    return true
  }
  else{
    return false
  }
}

  drawSprite();
}