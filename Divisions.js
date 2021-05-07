class Division{
    constructor(x,y){
        var options={
        isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width= 10;
        this.height=250;
        this.body = Bodies.rectangle(x, y,10,250, options);

        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;		

			fill(255);
            rectMode(CENTER);
			rect(pos.x,pos.y,10,250);
    }
}