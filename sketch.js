var car ,wall;
var speed , weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,200/2)
  speed = random(50,200)
  weight = random(400,1500)
}

function draw() {
  background(59);  
  car.velocityX = speed;
 if ( car.collide(wall)){
  car.velocityX = 0
   if(car.velocityX > 100 ){
     car.shapeColor = "green"
     car.velocityX = 0;
   } if (car.velocityX < 100 && car.velocityX > 180){
      car.shapeColor = "yellow"
      car.velocityX = 0;
     } else 
     car.shapeColor = "red"
     car.velocityX = 0;

 }  
 wall;
  drawSprites();
}