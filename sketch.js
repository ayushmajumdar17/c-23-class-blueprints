//alias for Engine, World and Bodies 
//namespacing 
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine, myworld,box1,box2,ground;
function setup()
{
    createCanvas(400,400);
    myengine=Engine.create();
    myworld=myengine.world;
    box1=new Box(200,200,50,50);
    box2=new Box(240,100,100,50);
    ground=new Ground(200,height,500,20);
    // console.log(mybody);
    //Engine.run(myengine);//checks for 60 fps
    
}

function draw()
{
    background(0);
    Engine.update(myengine);//checks for every frame
    box1.display();
    box2.display();
    ground.display();

}



