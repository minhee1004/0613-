class Brick extends GameObject{
    constructor(container, src, width, height,x,y,velX,velY){
        super(container, src, width, height,x,y,velX,velY);


        //container,width,height,x,y,bg
        this.leftSensor=new LeftSensor(this.container,1,40,this.x-1,this.y,"red");
        this.rightSensor=new RightSensor(this.container,1,40,this.x+this.width,this.y,"red");
        this.topSensor=new TopSensor(this.container,40,1,this.x,this.y-1,"red");
        this.bottomSensor=new BottomSensor(this.container,40,1,this.x,this.y+this.height,"red");
    }


   
}