//create varibels for all sprite
var stone,stonea,stoneg,monkey,monkeya,bananaa,banana,jungle,junglea,ground,play,end,schor,bananag;

function preload(){
//load the animationn to monkey and image to other
monkeya=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaa=loadImage("banana.png");
stonea=loadImage("stone.png")
junglea=loadImage("jungle.jpg");
}
function setup(){
createCanvas(600,400);
  
  //createground 
ground=createSprite(300,375,600,10);

//create jungle and give it its image and make it move
jungle=createSprite(200,200,400,400);
jungle.addImage("jungle",junglea);
jungle.velocityX=-5
jungle.scale=1.2;

//create monkey and give animation and scale to it 
monkey=createSprite(70,330,10,10);
monkey.addAnimation("monkeya",monkeya);
monkey.scale=0.15;
stoneg=new Group();
bananag=new Group();
schor=0;
}

function draw(){
  
//make back background black
background(10);
bananaf();
stonef();
switch(schor){
  case 0:monkey.scale=0.15
    break;
  case 10:monkey.scale=0.25
    break;
  case 20:monkey.scale=0.35
    break;
  case 30:monkey.scale=0.45
    break;
} 
//give grAVITY to monkey
monkey.velocityY=monkey.velocityY+0.55;
monkey.collide(ground);
if (keyDown("space")&&monkey.y>=300) {
monkey.velocityY=-15;
}
//make screen infinet
if(jungle.x<0){
jungle.x=jungle.width/2;
}
if (schor%10===0){
monkey.scale=monkey .scale+0.0002
}
stroke("white");
textSize(20);
fill("white");
text("score:"+schor,500,40)
//draw sprite
drawSprites();          
}
function bananaf(){
if(World.frameCount%150===0){
banana=createSprite(700,180,10,10);
banana.addImage("bananaa",bananaa)
banana.velocityX=-5;
bananag.add(banana);
  banana.scale=0.08
}
if (monkey.isTouching(bananag)){
schor=schor+1;
bananag.destroyEach();
}
}
function stonef(){
if(World.frameCount%80===0){
stone=createSprite(700,390,10,10);
stone.addImage("stonea",stonea);
stone.velocityX=-5;
stone.scale=0.2;
stoneg.add(stone);
stone.setCollider("rectangle",0,0,90,800,52);
  stone.debug=true;
}
if(monkey.isTouching(stoneg)){
stoneg.setVelocityEach(0, 0);      
bananag.setVelocityEach(0,0);
jungle.velocityX=0;
  schor=0;
}
}  