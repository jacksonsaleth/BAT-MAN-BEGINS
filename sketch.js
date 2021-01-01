//Create Physical Engine and variabes.
   const Engine = Matter.Engine;
   const World= Matter.World;
   const Bodies = Matter.Bodies;
   var engine,world;
   var amirtham;
   var guy,go;
   var Drops=[];
   var ball=50;
   var thunder;
   var r1,r2,r3,r4;
  
function preload(){
//Load Images here by calling a Varible.
go=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
      r1=loadImage("1.png");
      r2=loadImage("2.png");
      r3=loadImage("3.png");
      r4=loadImage("4.png");
}

function setup(){

 //Create canvas here and give it a width and height.
   createCanvas(800,800);
  
 //Create and call engine and world.
   engine = Engine.create();
   world = engine.world;

 //Create Sprite here.
   guy=createSprite(400,500,5,5);
   guy.addAnimation("in",go);
   guy.scale=0.5;
}

function draw(){
   
//Update Engine   
   Engine.update(engine);

  
 //Create Background and fill with desired colors {r,g,b}.   
    background(0,0,0);
    
 //Display the raindrops that we done in setup().  
    for(var i=0;i<Drops.length;i++){
      Drops[i].lifetime=1;
      Drops[i].display()
    }
    
//Call Thunder()function inn draw function.
     Thunder();
   
 //Call replace()function inn draw function.  
     replace();



//Draw the sprites that we created.
     drawSprites();

    }

function replace(){
   if(frameCount%10===0){
//Create as many as many rain drops using FOR LOOP.
      for(var i=0;i<ball;i++){
         Drops.push(new Amirtham(random(0,800),random(0,800),10));
         
      }
   }
}


function Thunder(){

// Using frameCount to display thunder effect 

if(frameCount%30===0){
   var rand=Math.round(random(1,4));
   thunder=createSprite(random(0,800),350,20,20)
   thunder.lifetime=5;
   thunder.scale=1;

//Create a Switct case statement for displaying Thunder at Random.

switch(rand) {
  case 1:thunder.addImage(r1);
          break;
  case 2:thunder.addImage(r2);
          break;
  case 3:thunder.addImage(r3);
          break;
  case 4: thunder.addImage(r4);
          break;
  default: break;

}
}
}