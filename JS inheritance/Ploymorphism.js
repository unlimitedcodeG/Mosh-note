function extend(Child,Parent){
    Child.prototype=Object.create(Parent);
    Child.prototype.constructor=Child;
}
function Shape(){

}
Shape.prototype.duplicate=function(){
    console.log('duplicate')
}
function Circle(){

}
extend(Circle,Shape);
Circle.prototype.duplicate=function(){
    console.log('duplicate circle')
}
function Square(){

}
extend(Square,Shape);
Square.prototype.duplicate=function(){
    console.log('duplicate square')
}
// const c=new Circle();
// const s=new Square();
const shapes=[
    new Circle(),
    new Square()
]
for(let shape of shapes){
    // if(shape.type==='circle')
    // duplicate();
    //else if.....*N
    shape.duplicate();// ploymorphism!!
}
