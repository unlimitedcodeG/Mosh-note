const numbers=[1,-1,2,3];
let sum=0;
// for(let n of numbers)
// sum+=n;
const sum=numbers.reduce(
(accumulator,currentValue)=>
   accumulator +currentValue)
console.log(sum)//5