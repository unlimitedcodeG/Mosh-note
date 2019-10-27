const person={
    firstName:'Mosh',
    lastName:'Hamedani',
    //fullName:function(){} ES5
     get fullName(){
        return `${firstName}+${lastName}`
    },//ES6
    set fullName(value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};
// person.fullName='John Smith';
//getter=>access properies
//setter=>change (mutate) them 
console.log(person.fullName())
//console.log(person.fullName)
