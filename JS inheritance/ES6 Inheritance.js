class Shape{
    move(){
        console.log('move')
    }
}

class Circle extends Shape{
    draw(){
        console.log('draw')
    }
}
const c=new Circle();
//------------------------------
class Shape{
   constructor(color){
       this.color=color;
   }

    move(){
        console.log('move')
    }
}

class Circle extends Shape{
    constructor(color,radius){
          super(color);
          this.radius=radius;
    }
    //if you want to add the child constructor,
    //should take a parent constructor first
    draw(){
        console.log('red',1)
    }
}
const c=new Circle('red');
c
//Circle{color:'red'}