class Stone
{
    constructor(x,y,r)
    {
        var options=
        {
           
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        this.image=loadImage("stone.png")
        
        World.add(world,this.body);
        
     
        
    }

    display()
    {
       
        
        fill("magenta");
        
       imageMode(RADIUS);
        image(this.image,this.x,this.y,this.r,this.r);
        
    }
}