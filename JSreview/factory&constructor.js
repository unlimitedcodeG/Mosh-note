function createCircle(radius){
  return{
      draw(){
          console.log('draw');
      }
  };
}
const myCircle=createCircle(1);
function Circle(radius){
         this.radius=radius,
         this.draw=function(){
           console.log('draw')
        }
}
const circle=new Circle(1);