let person={name:'Mosh'};
let objectBase=Object.getPrototypeOf(person);
let descriptor=Object.getOwnPropertyDescriptor(objectBase,'toString');
console.log(descriptor);
//----------------------
Object.defineProperty(person,'name',{
    writable:false,
    enumerable:false,
    configurable:false
});
delete person.name;//nothing happend
person.name='John';//Mosh
console.log(Object.keys(person))//[]