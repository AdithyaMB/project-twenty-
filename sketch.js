var cat , cat1Image , cat2Image , cat3Image , cat4Image;
var mouse , mouse1Image , mouse2Image , mouse3Image , mouse4Image;
var garden , gardenImage;

function preload() {
    //load the images here
    cat1Image = loadAnimation("images/cat1.png ");
    mouse1Image = loadAnimation("images/mouse1.png ");
    gardenImage = loadImage("garden.png");
    cat2Image = loadAnimation("images/cat2.png , images/cat3.png");
    mouse2Image = loadAnimation("images/mouse2.png , images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat = createSprite(700,200,20,20);
   cat1Image.addImage("cat1Image");
   cat2Image.addImage("cat2.png");
   cat3Image.addImage("cat3.png");
   cat4Image.addImage("cat4.png");

   mouse = createSprite(150,200,20,20);
  mouse.addImage("mouse1Image");
  mouse2Image.addImage("mouse2.png");
  mouse3Image.addImage("mouse3.png");
  mouse4Image.addImage("mouse4png");


}

function draw() {

    background(255);
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.addAnimation("catHappy",cat4Image);
    cat.changeAnimation("catHappy");
    mouse.addAnimation("mouseHappy",mouse2Image);
    mouse.changeAnimation("mouseHappy");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === RIGHT_ARROW){
mouse.addAnimation("mouseTeasing",mouse2Image);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;
}

if(keyCode === LEFT_ARROW){
cat.addAnimation("catMoving",cat2Image,cat3Image);
cat.changeAnimation("catMoving");
cat.positionX = mouse.positionX;
cat.positionY = mouse.positionY;
}
}
