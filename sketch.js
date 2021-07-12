var path, pathImage;
var boy, boyImg;
var leftB, rightB;
var edges;
function preload(){
  //pre-load images
  pathImage = loadAnimation("path.png");
  boyImage = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,600);
  //create sprites here

  

  path = createSprite(200,200);
  path.addAnimation("path",pathImage)
  

  boy = createSprite(180,520,30,30);
  boy.addAnimation("run", boyImage)
  boy.scale = 0.10

 

   leftB = createSprite(0,300,10,600)
   leftB.visible = false;

   rightB = createSprite(400,300,10,600)
   rightB.visible = false;
}

function draw() {
  background(0);
boy.x = mouseX;

edges = createEdgeSprites();
boy.collide(edges[3]);

boy.collide(leftB);
boy.collide(rightB);

path.velocityY = 4;
if(path.y > 400){
path.y = 300;
}

  drawSprites();

}