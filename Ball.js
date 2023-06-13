class Ball extends GameObject {
    constructor(container, src, width, height,x,y,velX,velY){
        super(container, src, width, height,x,y,velX,velY);
        
        this.falled=false;

        //container,width,height,x,y,bg
        this.leftSensor=new LeftSensor(this.container,1,20,this.x-1,this.y+5,"red");
        this.rightSensor=new RightSensor(this.container,1,20,this.x+this.width,this.y+5,"red");
        this.topSensor=new TopSensor(this.container,20,1,this.x+5,this.y-1,"red");
        this.bottomSensor=new BottomSensor(this.container,20,1,this.x+5,this.y+this.height,"red");
    }        

    /*
    hitCheck(){
       
        for(let i=0; i<barArray.length; i++){
            let result=collisionCheck(this , barArray[i]);
            
            if(result){
                
                this.y=barArray[i].y - this.height;
                this.falled=true;
                
               
            }
        }   
    }
    

*/
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;  
     
        if(this.x>=500-25 || this.x<=0){
            this.velX=-this.velX;
        }
        if(this.y>=800-25 || this.y<=0){
            this.velY=-this.velY;
        }

        this.leftSensor.tick(this);
        this.leftSensor.render();

        this.rightSensor.tick(this);
        this.rightSensor.render();

        this.topSensor.tick(this);
        this.topSensor.render();

        this.bottomSensor.tick(this);
        this.bottomSensor.render();

     
    }
    
}