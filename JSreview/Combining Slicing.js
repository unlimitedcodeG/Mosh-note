const first=[1,2,3,4];
const first2=[{id:1}]
const second=[4,5,6];
const combined=first.concat(second);//[1,2,3,4,5,6]
const combined2=first.concat(second);//copy reference
first[0].id=10;//[{id:10},4,5,6]
const slice=combined.slice(2,4)//[3,4]
const slice=combined.slice(2)//[3,4,5,6]
const slice=combined.slice()//[1,2,3,4,5,6]
console.log(combined);
