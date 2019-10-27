function Circle(radius){
    this.radius=radius,
    this.draw=function(){
        console.log('draw');
    }
}
// const Circle1=new Function('radius',`
// this.radius=radius,
//     this.draw=function(){
//         console.log('draw');
//     }`)
// const circle=new Circle1(1);
Circle.call({},1);
Circle.apply({},[1,2,3]);
// The same method to next new XX()
const another=new Circle(1);