
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5
var rope1, rope2, rope3, rope4, rope5
var roof

function setup() {
createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  bob1 = new Bob(400, 400, 50);
  bob2 = new Bob(500, 400, 50);
  bob3 = new Bob(600, 200, 50);
  bob4 = new Bob(300, 400, 50);
  bob5 = new Bob(200 , 400, 50); 

  //roof = new Roof(400, 100, 60, 50);

  rope = new Rope(bob1, roof);
  rope2 = new Rope(bob2, roof)
  rope2_options = {
     pointB:500
  }
  
  rope3 = new Rope(bob3, roof)
  rope4_options = {
     pointB:600
  }

  rope4 = new Rope(bob4, roof)
  rope4_options = {
     pointB:300
  }
  
  rope5 = new Rope(bob5, roof)
  rope5_options = {
     pointB:200
  }



	Engine.run(engine); 
}

function draw() {
  background("white");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.disaply();
  rope5.display();
 
}



