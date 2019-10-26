'use strict'
const Circle=function(){
    this.draw=function(){console.log(this);}
}
const c=new Circle();
//Method Call
c.draw();
const draw=c.draw;
//Function Call
draw();//this is a window
 //'undefined' in use strict model
 //-----------ES6
 class Circle{
     draw(){
         console.log(this)
     }
 }
 const c=new Circle();
 const draw=c.draw;
 draw()
 //undefined
 //----------------------