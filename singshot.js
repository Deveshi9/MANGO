class sling{
	constructor(stone,pointA)
	{
		
		var options={ bodyA:stone,			 
			pointB:pointA, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=stone,
		this.pointB=pointA,
		this.launcher=Constraint.create(options),
		World.add(world,this.launcher)
	}

	attach(body){
		this.slinj.bodyA=body;
	}

	fly()
	{
		this.slinj.bodyA=null;
	}

	display()
	{
		if(this.slinj.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}