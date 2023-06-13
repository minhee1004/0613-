class RightSensor extends Sensor{
    tick(obj){
        this.x=obj.x+obj.width;
        this.y=obj.y+3; 
     }
}