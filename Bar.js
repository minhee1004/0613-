class Bar extends GameObject{
    constructor(container, src, width, height,x,y,velX,velY){
        super(container, src, width, height,x,y,velX,velY);
        
    

        //container,width,height,x,y,bg

        this.topSensor=new TopSensor(this.container,50,1,this.x+2,this.y,"red");
    
    }      
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;  

        this.topSensor.tick(this);
        this.topSensor.render();

     
    }
       
}
