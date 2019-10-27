function interest(principal,rate,years){
    rate=rate||3.5;
    years=years||5;
    return principal*rate/100*years;
}
console.log(interest(10000,3.5,5))
// in ES6
function interest(principal,rate=3.5,years=5){
    return principal*rate/100*years;
}
console.log(interest(10000,3.5,5))
// if we not defined a years
function interest(principal,rate=3.5,years){
    return principal*rate/100*years;
}
console.log(interest(10000))//NaN  years=undefined
