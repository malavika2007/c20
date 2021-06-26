var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  fixedRect2=createSprite(200,300,80,30)
  fixedRect2.shapeColor="green";

  fixedRect3=createSprite(400,500,80,30)
  fixedRect3.shapeColor="green";

  fixedRect4=createSprite(600,300,80,30)
  fixedRect4.shapeColor="green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
  }
  else if(isTouching(movingRect,fixedRect3)){
    movingRect.shapeColor = "red";
    fixedRect3.shapeColor = "red";
  }
  else if(isTouching(movingRect,fixedRect4)){
    movingRect.shapeColor = "red";
    fixedRect4.shapeColor = "red";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
    fixedRect2.shapeColor="green"
    fixedRect3.shapeColor="green"
    fixedRect4.shapeColor="green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y -movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


