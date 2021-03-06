var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
  //pre-load images
pathImg.loadImage("path.png");
boyrImg.loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velovityY = 4;
  path.scale=1.2;

boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}


function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  

if(path.y > 400 ){
  path.y = height/2
}

  drawSprites()

}
