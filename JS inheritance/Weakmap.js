const _radius=new WeakMap();
const _move=new WeakMap();
const privateProps=new WeakMap();
class Circle{
    constructor(radius){
        _radius.set(this.radius);
        _move.set(this,function(){
            console.log('move',this);//window but es6 is undefined
        });
        _move.set(this,()=>console.log('move',this))
    }
draw() {
  //  console.log(_radius.get(this));
  _move.get(this)();
  console.log('draw')
}
};
const c=new Circle(1);
c// not have radius props
c.draw()
//move undefined
//draw
c.draw()
//move Circle{...}
//draw
//-------------------------------
const _radius=new WeakMap();
const _move=new WeakMap();
const privateProps=new WeakMap();
class Circle{
    constructor(radius){
        privateProps.set(this,{
            radius:radius,
            move:()=>{

            }
        })
    }
}
privateProps.get(this).radius 