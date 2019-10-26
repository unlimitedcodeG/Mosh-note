class Shape{
    move(){
        console.log('move')
    }
}

class Circle extends Shape{
  move(){
      super.move();
      console.log('circle move')
  }
}
const c=new Circle()
c.move()
//circle move
c.move()
//move 
//circle move