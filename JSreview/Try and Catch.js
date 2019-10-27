const person={
    firstName:'Mosh',
    lastName:'Hamedani',
    set fullName(value){
        if(typeof value!=='string')return;
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};
person.fullName=null; // not take effect
console.log(person);
//----------------------------------------
const person={
    firstName:'Mosh',
    lastName:'Hamedani',
    set fullName(value){
        if(typeof value!=='string')
        //const e=new Erro();
        //throw e;another way to write; easily to understand
        throw new Error('Value is not a string');
        const parts=value.split(' ');
        if(parts.length!==2);
        throw new Error('Enter a first and last name')
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};
try{
    person.fullName=null;
}catch(e){
    alert(e)
}