var bg,arrow,bow,frame1,frame2,frame3,cover1,cover2,cover3;
var toy1, toy2, toy3, toyBox;
var toy1Image, toy2Image, toy3Image, toyBoxImage;
var board1,board2,board3;
var blackImage;
var invisibleGround;
var arrowImage,bowImage,bgImage,frame1Image,frame2Image,frame3Image,board1Image,board2Image;

function preload()
{
	arrowImage=loadImage("arrow.png");
	bgImage=loadImage("bg.png");
	frame1Image=loadImage("Pic-1.png");
	frame2Image=loadImage("Pic-2.png");
	frame3Image=loadImage("Pic-3.png");
	board1Image=loadImage("dartPart1.png");
	board2Image=loadImage("dartPart2.png");
	bowImage=loadImage("bow.png");
	toy1Image=loadImage("teddy.png");
	toy2Image=loadImage("toyBlocks.png");
	toy3Image=loadImage("toyCar.png");
	toyBoxImage=loadImage("toyBox.png");
	blackImage=loadImage("blackPic.png")

	
}

function setup() {

	createCanvas(800, 500);

  bg=createSprite(400,250,800,700);
  bg.addImage("bg",bgImage);
  bg.scale=2;

  
 frame1 = createSprite (260,170,150,250);
 frame1.addImage("frame1", frame1Image);
 frame1.scale=0.5;

 frame2 = createSprite(410,170,130,250);
 frame2.addImage("frame2",frame2Image);
 frame2.scale=0.45;

 frame3 = createSprite(565,170,150,250);
 frame3.addImage("frame3",frame3Image);
 frame3.scale=0.6;

 cover1 = createSprite(260,170,150,220);
 cover1.addImage("cover1",blackImage);
 cover1.scale=0.7;

 cover2=createSprite(410,170,150,220);
 cover2.addImage("cover2",blackImage);
 cover2.scale=0.7;

 cover3=createSprite(565,170,180,220);
 cover3.addImage("cover3",blackImage);
 cover3.scale=0.7;

 board1 = createSprite(720,190,100,180);
 board1.addImage("board1",board1Image);
 board1.scale=0.6;

 board2 = createSprite(720,190,150,270);
 board2.addImage("board1",board2Image);
 board2.scale=0.5;

 board3 = createSprite(720,190,50,90);
 board3.addImage("board1",board1Image);
 board3.scale=0.2;

 bow = createSprite(400,350);
 bow.addImage("bow",bowImage);
 bow.scale=0.4;

 
 arrow=createSprite(400,357,50,50);
 arrow.addImage("arrow",arrowImage);
 arrow.scale=0.1;

toy1 = createSprite(670,350);
toy1.addImage("toy1",toy1Image);
toy1.scale=0.2

toy2 = createSprite(605,355);
toy2.addImage("toy2",toy2Image);
toy2.scale=0.2

toy3= createSprite(555,355);
toy3.addImage("toy3",toy3Image);
toy3.scale=0.2

toyBox=createSprite(300,355);
toyBox.addImage("toyBox",toyBoxImage);
toyBox.scale=0.2;

invisibleGround=createSprite(400,500,800,30);
invisibleGround.visible=false;


}


function draw() {
	bow.y=mouseY;
	arrow.y=mouseY
  background("black")
    drawSprites();
 
if(keyDown("space")){
	arrow.velocityX=8;
}


if(arrow.isTouching(board1)){
	//cover1.visible=false;
	cover1.velocityY=2;
	arrow.velocityX=1;
	bow.velocityX=0;
}

if(arrow.isTouching(board2)){
	cover2.velocityY=2;
	arrow.velocityX=1;
	bow.velocityX=0;
}

if(arrow.isTouching(board3)){
	cover3.velocityY=2;
	arrow.velocityX=0;
	bow.velocityX=0;
}


if(cover1.isTouching(invisibleGround)){
	cover1.velocityY=0;
}
if(cover2.isTouching(invisibleGround)){
	cover2.velocityY=0;
}
if(cover3.isTouching(invisibleGround)){
	cover3.velocityY=0;
}

}



