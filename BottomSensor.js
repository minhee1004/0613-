class BottomSensor extends Sensor{
    tick(obj){
        this.x=obj.x+5;
        this.y=obj.y+obj.height;
 
     } 
   
}