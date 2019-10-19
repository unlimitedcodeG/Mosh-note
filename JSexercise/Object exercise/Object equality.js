let address1=new Address('a','b','c');
let address2=new Address('a','b','c');//the address is not as a same address
let address3=address1;//this is a same
console.log(areEqual(address1,address2))//true
console.log(areSame(address1,address2))//true
console.log(areSame(address1,address3))//true
//Constructor Function
function Address(street,city,zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
}
function areEqual(address1,address2){
    return address1.street===address2.street&&
    address1.city===address2.city&&
    address1.zipCode===address2.zipCode
    
}
function areSame(address1,address2){
    return address1===address2;

}