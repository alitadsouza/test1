
var movingRect;
var fixedRect;

function setup() {

  createCanvas(800, 400);

  movingRect = createSprite(100, 200, 50, 50);
  fixedRect = createSprite(400, 200, 50, 50);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "blue";

}

function draw() {
  background(30,256,270);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  if (movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2  &&
    fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2 /*&&

    movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2 */

  ) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "blue";
  } 

  drawSprites();
}