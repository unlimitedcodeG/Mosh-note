let numbers=[1,2,3,4];
let another=numbers;
//Solution1
//numbers=[];
console.log(numbers);//[]
console.log(another);//[1,2,3,4]
//Solution2
numbers.length=0;
console.log(numbers);//[]
console.log(another);//[]
//Solution3
numbers.splice(0,numbers.length);
console.log(numbers);//[]
console.log(another);//[]
//Solution4
while(numbers.length>0)
 numbers.pop();
 console.log(numbers);//[]
console.log(another);//[]
