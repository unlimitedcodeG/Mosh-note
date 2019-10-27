const numbers=[1,2,3,4];

//End
numbers.push();
const last=numbers.pop();
//Begining
const first=numbers.shift();
console.log(first);
numbers.unshift();
numbers.shift();
//Middle
numbers.splice(2,0,'a')// add 'a'
numbers.splice(2,1) // delete one