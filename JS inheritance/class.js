// function Circle(radius){
  // this is a constructor function @1
// }


class Circle{
    constructor(radius){
        //just like @11
        this.radius=radius;
    }
    draw(){
        console.log('draw')
    }
}
const c=new Circle(1);
//typeof Circle
//function
//forget new=>error