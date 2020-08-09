var wall, thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
 wall=createSprite(1200,200,thickness, height/2);
 fill("white");
 bullet=createSprite(200,200,10,50);
 wall.shapeColor=color(80,80,80);
 thickness=random(22,83);
 speed=random(223.321);
 weight=random(30,52);
}

function draw() {
  background(255,255,255);
  //hasCollided();
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
     damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  } 

  if (damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}
function hasCollided (lbullet, lwall) {
  bulletRightEdge=lbullet.x +lbullet.width;
  wallleftEdge=lwall.x;
  if (bulletRightEdge>=wallleftEdge){
    return true;
  }
  return false;
}