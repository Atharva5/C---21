var fixedRect, movingRect, Box1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  Box1 = createSprite(400,400,80,30);
 Box1.shapeColor = "green";
 Box1.debug = true;
}

function draw() {
  background(0,0,0);

Box1.x = mouseX;
Box1.y = mouseY;

if(isTouching(movingRect, Box1)){
  movingRect.shapeColor = "blue";
 Box1.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  Box1.shapeColor = "green";
}

 bounceOff(movingRect,fixedRect);
  bounceOff(Box1, movingRect);
  drawSprites();
}
