const numbers=[1,2,3,4];
const count=countOccurence(numbers,1);
console.log(count)
function countOccurence(array,searchElement){
    // let count=0;
    // for(let element of array)
    // if(element===searchElement)
    // count++;
    // return count;
    return array.reduce((accumulator,current)=>{
        const occurence=(current===searchElement)?1:0;
        console.log(accumulator,current,searchElement)
        return accumulator+occurence;
    },0)
}