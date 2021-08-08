var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImag;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");


}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApple();

  spawnLeaf();


  drawSprites();
}

function spawnApple(){
  // write your code here 
 
 
 if(frameCount % 60 ===0){
 
   apple = createSprite(200,100,40,10);
   apple.addImage(appleImg);
   apple.y = Math.round(random(50,100))
  apple.velocityX = -3;
  apple.scale = 0.1 ;

 }
}

function spawnLeaf(){
  // write your code here 
 
 
 if(frameCount % 80 ===0){
 
   leaf = createSprite(360,70,40,10);
   leaf.addImage(leafImg);
   leaf.y = Math.round(random(200,250))
   leaf.velocityX = -3;
   leaf.scale = 0.1;

 }
}

 