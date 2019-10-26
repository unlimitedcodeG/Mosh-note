function Circle(radius){
    this.radius=radius;
    this.draw=function(){
     console.log('draw')
    };
    Object.defineProperty(this,'defaultLocation',{
        get:function(){
            return defaultLocation;
        },
        set:function(value){
            if(!value.x||!value.y)
               throw new Error('Invalid location.');

        defaultLocation=value;
        }
    });
}
const circle=new Circle(10);
circle.computeOptimumLocation(0.1);
circle.draw();