const _radius=Symbol()// just a function not constructor function don't use a new
//Symbol===Symbol false
const _draw=Symbol()
class Circle{
    constructor(radius){
        this[_radius]=radius;
    }
    [_draw](){
    }
}
const c=new Circle(1);
console.log(Object.getOwnPropertyNames(c))//[]
console.log(Object.getOwnPropertySymbols(c))//[Symbol()]
const key=Object.getOwnPropertySymbols(c)[0];
console.log(c[key])//1
