class Circle{
    constructor(radius){
        this.radius=radius;
    }
    //Instance Method
    draw(){

    }
    //Static Method
    static parse(str){
        const radius=JSON.parse(str).radius;
        return new Circle(radius);
    }//use to build inside method
}
const circle=new Circle(1);
const circle=Circle.parse('{"radius":1}')
console.log(circle);
// radius draw  
// parse not here
//------------------------------------------
class Math2{
    static abs(value){
        //some magic....
    }
}
Math2.abs()