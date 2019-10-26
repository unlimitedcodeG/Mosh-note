const _radius=new WeakMap();
class Circle{
    constructor(radius)
    {
        _radius.set(this,radius);
        //es5
        // Object.defineProperty(this,'radius',{
        //     get:function(){

        //     }
        // })
    }
    getRadius(){
        return _radius.get(this)
    }
}
const c=new Circle(1);
c.getRadius()//1
//---------------------------------
const _radius=new WeakMap();
class Circle{
    constructor(radius){
        _radius.set(this,radius);
    }
    get radius(){
        return _radius.get(this);
    }
    set radius(value){
        if(value<=0) throw new Erro('invalid radius')
        _radius.set(this,value);
    }
}
const c=new Circle(1);
