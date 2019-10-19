 const isActive=true;
 const name='Mosh';//Truthy (true)
 const name=''//falsy(false)
 if(name)
 console.log('Hello');
//Hello 

function countTruthy(array){

}
//-------------------------------------
const array=[0,null,undefined,'',2,3];
console.log(countTruthy(array))
function countTruthy(array){
    let count=0;
    for(let value of array)
    if(value)//if(value!==false||value!==undefined)
      count++;
      return count

}