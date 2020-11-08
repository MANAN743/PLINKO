const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var division=[]
var plinko=[]
var particle=[];


var engine,world;

function setup() {
  createCanvas(480,800);
  engine= Engine.create()
  world= engine.world;
  ground=new Ground(240,780,480,20);

  for(var i=5;i<width;i=i+78){
    division.push(new Division(i,600,10,340));
  }
  for(var i=40;i<=width;i=i+50)
{
  plinko.push(new Plinko(i,75));
}
for(var i=15;i<=width-10; i=i+50)
{
  plinko.push(new Plinko(i,175));
}
for(var i=40;i<=width;i=i+50)
{
  plinko.push(new Plinko(i,275));
}
for(var i=15;i<=width-10; i=i+50)
{
  plinko.push(new Plinko(i,375));
}
}
function draw() {
  background(0);
  Engine.update(engine)
  ground.display()
  
  if(frameCount%20===0){
    particle.push(new Particle(random(10,470),0));
  }
for(var i=0;i<particle.length;i++){
  particle[i].display();
}
for(var i=0;i<division.length;i++){
  division[i].display();
}
for(var i=0;i<plinko.length;i++){
  plinko[i].display();
}
}