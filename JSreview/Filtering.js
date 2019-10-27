const numbers=[1,-1,2,3];
const Positive=numbers.filter(function(value){
   return value=>0;

})
const Filter=numbers.filter(n=>n>=0);
console.log(Positive)
console.log(Filter)