// sum([1,2,3,4])=>10;
Array.isArray()
// function sum(...items){
//     if(items.isArray)
//     for(let i;i<items.length;i++)
//     let sum=0;
//     let value=i;
//     sum+=value;
//     console.log(sum)
// }
function sum(...item){
    return items.reduce((a,b)=>a+b)
}
//-----------------
console.log(sum([1,2,3,4]));
function sum(...items){
    //console.log(items) ...exchange the all args to Array,as a another Array;
    if(items.length===1&&Array.isArray(items[0]))
    items=[...items[0]]//get a int Array
    return items.reduce((a,b)=>a+b)
}