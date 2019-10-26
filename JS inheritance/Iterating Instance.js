function Circle(radius){
    //Instance members
    this.radius=radius;
    this.move=function(){
        console.log('move')
    }
}
const c1=new Circle(1);
//Prototype members
Circle.prototype.draw=function(){
    console.log('draw');
}
//Returns Instance members
console.log(Object.keys(c1));
//Returns all members(instance+prototype)
for(let key in c1)
console.log(key);
c1.hasOwnProperty('radius') //true
