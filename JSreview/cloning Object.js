const circle={
    radius:1,
    draw(){
        console.log('draw');
    }
};
// const another={};
// for(let key in circle)
// another[key]=circle[key];
//const another=Object.assign({},circle);

// const another=Object.assign({
//     color:'red'
// },circle);
// The most simply ways is next 
const another={...circle};
console.log(another);
