class Box
{
    constructor(x,y,width,height)
    {
         var options={
        'friction':0.6,
        'density':1.0,
        'restitution':0.8
         }
        //JSON format Javascript object notation 
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(myworld,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255,255,0)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    
}