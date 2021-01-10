var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400, 200, 30, 30);
  movingRect.shapeColor="green";

}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x)
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2)    {
    //400 - 200 < 25 + 15
   // 200 < 40



    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";

  }
  else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }

  drawSprites();
}