const _radius=new Weakmap();

export class Circle{
    constructor(radius){
        _radius.set(this,radius)
    }
    draw(){
        console.log('Circle with radius'+_radius.get(this).radius)
    }
}
