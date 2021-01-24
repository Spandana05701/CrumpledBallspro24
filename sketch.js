const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
    paper = new Paper(100,600,10);
	
	leftSide = new DustBin(560,630,20,100);
	rightSide = new DustBin(660,630,20,100);
	bottom = new DustBin(610,660,20,100);

	ground = new Ground(400,680,800,20)

	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();
  leftSide.display();
  rightSide.display();
  bottom.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:15, y:-15});
	}
	
}


