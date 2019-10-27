function sum(a,b){
    return a+b;
}
console.log(sum(1,2));
//console.log(sum(1))//NaN
//console.log(sum())//NaN
function sum(a,b){
    console.log(arguments);
    return a+b;
}
console.log(sum(1,2,3,4,5));
//
function sum(){
    let total=0;
    for(let value of arguments)
    total+=value;
    console.log(arguments)
}



