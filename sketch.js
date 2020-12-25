var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,sprite1,sprite2,sprite3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.25, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    sprite1=createSprite(width/2,600,200,20)
sprite2=createSprite(310,550,20,100);
sprite3=createSprite(490,550,20,100);

	 box1 = Bodies.rectangle(width/2,600,200,20,{isStatic:true});
	 box2 = Bodies.rectangle(310,550,20,100,{isStatic:true});
	 box3 = Bodies.rectangle(490,550,20,100,{isStatic:true});
	 World.add(world,box1)
World.add(world,box2)
World.add(world,box3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 //rect(ground.position.x,ground.position.y,width,10)
  //box1.displayer();
  //box2.displayer();
 // box3.displayer();
  
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody,false);
    
  }
}



