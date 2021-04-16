const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var gameState = "onSling";
var particles = [];
var plinkos = [];
var divisions;
var divisionHeight=300;
var score =0;
var plinko;
var particle;
var ground;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions =new Divisions(k, height-divisionHeight/2, 10, divisionHeight);
     this.particles.push(divisions);
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinko = new Plinko(j,75);
       this.plinkos.push(plinko);
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinko =new Plinko(j,175);
       this.plinkos.push(plinko);
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinko = new Plinko(j,275);
       this.plinkos.push(plinko);
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinko = new Plinko(j,375);
       this.plinkos.push(plinko);
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 
 fill("white");
    text("SCORE: "+ score,20,30);
  Engine.update(engine);
 
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particle = new Particle(random(width/2-30, width/2+30), 10,10);
     //this.particles.push(particle);
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

function mousePressed(){
  if(gameState!=="launched" && frameCount%60===0){
    particle= new Particle(mouseX,10,10,10);

    this.particles.push(particle);
  }
}
function mouseReleased(){

}