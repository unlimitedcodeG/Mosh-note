const numbers=[1,-1,2,3];
const allPositive=number.every(function(value){
    return value===2;
});
console.log(allPositive)
const atOnePositive=number.some(function(value){
    return value=>0;
});
console.log(atOnePositive);