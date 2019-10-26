function extend(Child,Parent){
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child;
}
function Shape(){

}
Shape.prototype.duplicate=function(){
    console.log(duplicate)
}

function Circle(radius){
    this.radius=radius;
}
Circle.prototype.draw=function(){
    console.log('draw')
}
function Square(){

}
extend(Square,Shape)
const s=new Shape();
const c=new Circle(1);