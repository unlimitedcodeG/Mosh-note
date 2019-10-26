//Factory Function
function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log('draw')
        }
    }
};
const circle=createCircle(1);
circle.draw();
//Constructor
function Circle(radius){
     this.radius=radius;
     this.draw=function(){

     }
}
const c=new Circle(1);