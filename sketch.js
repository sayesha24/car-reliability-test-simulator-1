var car; 
var wall;
var speed; 
var weight; 

function setup() {
  createCanvas(2000,400);

  car = createSprite(50, 200, 70, 50);
  
  wall = createSprite(1000, 200, 60, 200);
  wall.shapeColor= "white";
  wall.debug= true; 

  car.depth= wall.depth; 

  speed= random(55, 90);
  weight= random(400, 1500);
  
}


function draw() {
  background(0);  

  car.velocityX= speed; 
  if(wall.x- car.x < (car.width+wall.width)/2){

    car.velocityX= 0;
    var deformation= 0.5 * weight*speed * speed/22509;

    if(deformation> 180){

      car.shapeColor= color(255,0, 0);

    }
  
    if(deformation<180 && deformation> 100){
 
    car.shapeColor= color(230, 230, 0);
    }
 
    if(deformation<100){
    
    car.shapeColor= color(0, 255, 0);
    }
  }
  drawSprites();
}