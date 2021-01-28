const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1 
var base,slingShot;
var score=0;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(1600,500);
  stroke(255)
 engine=Engine.create() ;
 world=engine.world;

  ground = new Ground(680,330,500,20);

  block1= new Box(497,308,30,40);
  block2=new Box(532,310,30,40);
  block3=new Box(564,314,30,40);
  block4=new Box(601,318,30,40);
  block5=new Box(640,314,30,40);

  block6=new Box(513,269,30,40);
  block7=new Box(544,269,30,40);
  block8=new Box(577,269,30,40);
  block9=new Box(608,269,30,40);

  block10=new Box(525,236,30,40);
  block11=new Box(557,236,30,40);
  block12=new Box(590,236,30,40);

  block13=new Box(534,192,30,40);
  block14=new Box(568,192,30,40);
  block15=new Box(549,156,30,40);

polygon=Bodies.circle(93,230,20);
World.add(world,polygon);

  slingshot=new Slingshot(this.polygon,{x:93,y:230});
  }

function draw() {

  background(0);  
  Engine.update(engine)

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
 block14.display();
 block15.display();


 
 block1.Score();
 block2.Score();
 block3.Score();
 block4.Score();
 block5.Score();
 block6.Score();
 block7.Score();
 block8.Score();
 block9.Score();
 block10.Score();
 block11.Score();
 block12.Score();
 block13.Score();
block14.Score();
block15.Score();

  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();
 drawSprites();
text("SCORE:"+score,758,40)

 textSize(30);
fill("white");
text(mouseX + "," + mouseY,30,30);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(this.polygon);
  }
}
 


async function getBackground(){
  var reponse= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var reponseJson=await reponse.json();
  var time=reponseJson.datetime;
  var hour=time.slice(11,13);

  console.log(hour);
}
