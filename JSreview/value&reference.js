let x=10;
let y=x;
x=20;
//x=20;y=10
let x={value:10};
let y=x;
x.value=20;
// x=20;y=20;
let number=10;
function increase(number){
    number++
}
console.log(number);
// number 10
let obj={value:10};
function increase(obj){
   obj.value++
}
increase(obj)
console.log(obj.value)
// obj 11  we deal with the same address of obj(function point to address)
