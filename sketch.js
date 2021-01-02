const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box;
var slingshot;
var polygon1;
var engine;
var score=0;
var backgroundImg;


var gameState = "onSling";




function preload()
{
	//apitime();
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
    world = engine.world;

   // box1=new Box(330,235);
    box2=new Box(360,235);
    box3=new Box(390,235);
    box4=new Box(420,235);
    box5=new Box(450,235);
    box6=new Box(330,235);

    box7=new Box(360,195);
    box8=new Box(390,195);
    box9=new Box(420,195);

    box10=new Box(390,155);

    box11=new Box(800,235);
    box12=new Box(800,275);
    box13=new Box(830,275);
    box14=new Box(770,275);
    box15=new Box(800,315);
    box16=new Box(830,315);

    box17=new Box(860,315);
    box18=new Box(770,315);
    box19=new Box(740,315);

    ground1=new Ground(800,340,200,10);
    ground2=new Ground(390,260,200,10);

    polygon1=new Poly(200,200,60);

    slingshot = new Slingshot(polygon1.body,{x:200, y:200});

   
    Engine.run(engine);
}


function draw() {
    Engine.update(engine);
    rectMode(CENTER);
    if(backgroundImg){
    background(backgroundImg);
  }
    text ("score-"+score,750,40)

  //  box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    ground1.display();
    ground2.display();

    polygon1.display();


    slingshot.display();

    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();

    drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon1.body)
    }
}
async function apitime(){
    var ashu=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var ashuJSON=await ashu.json();
    console.log(ashuJSON);
    var datetime=ashuJSON.datetime
    console.log(datetime)
    var hour=datetime.slice(11,13)
    console.log(hour)
    if(hour>=05&&hour<=18){
        bg="bg.png"
    }
    else{
        bg="bg2.jpg"
    }
    backgroundImg=loadImage(bg)
    
}