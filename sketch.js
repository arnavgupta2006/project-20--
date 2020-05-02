var car, wall; 
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  wall.shapeColor(80,80,80);
  deformation = 0.5*weight*speed*speed/22500;
}


function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX = speed;
if(wall.x-car.x < (car.width + wall.width)/2){
  if(deformation<100){
    car.shapeColor = "green";
  }
  if(deformation>100 && deformation<180){
    car.shapeColor = "Yellow";
  }
  if(deformation>180){
    car.shapeColor = "Red";
  }
}
}
