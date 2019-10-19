let address={
    street:'a',
    city:'b',
    zipCode:'c'
}
//factory
let address=createAddress('a','b','c');
 console.log(address);
function createAddress(street,city,zipCode){
  return {
      street,
      city,
      zipCode
  }
}
createAddress(address);
//constructor
let address=new Address('a','b','c');
console.log(address)
function Address(street,city,zipCode){
    this.street=street,
    this.city=city,
    this.zipCode=zipCode
}
