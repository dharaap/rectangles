var fixedRect, movingRect;
var car ;
var wall;
function setup() {
  createCanvas(1200,800);
  car = createSprite(10, 150, 20, 20);
  wall = createSprite(750, 150, 40, 60);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car.velocityX = 3 
}

function draw() {
  background(0,0,0); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 bounceOff (car, wall);
  drawSprites();
}
function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX= object1.velocityX * (-1)
    }
    if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
object1.velocityY = object1.velocityY * (-1)
    }
  }