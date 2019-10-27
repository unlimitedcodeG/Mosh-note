function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw')
        },
    };
    }
    const circle=createCircle(1);
    function Circle(radius){
        this.radius=radius,
        this.draw=function(){
            console.log('draw')
        }
    }
    const another=new Circle(1);
    // String() '' "" `` simple than Stirng() to create Object;
    //Boolean() true false
    //Number() 1,2,3