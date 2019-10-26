function Shape(color){
    this.color=color;
}
Shape.prototype.duplicate=function(){
    console.log('duplicate');
}
function Circle(radius){
    // Shape(color)
    Shape.call(this,color)
    Shape.apply(this,color)
    this.radius=radius;
}
Circle.prototype=Object.create(Shape.prototype);
Circle.prototype.constructor=Circle;

Circle.prototype.draw=function(){
    console.log('draw')
}
const s=new Shape();
const c=new Circle(1);
c//no color
c// red radius
