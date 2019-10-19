showPrime(10);
//Prime(whose factor are only 1 and itself)
//Composite

function showPrimes(limit){
for(let number=2;number<=limit;number++){
    if(isPrime) console.log(number);
}
}
function isPrime(number){
        for(let factor=2;factor<number;factor++)
            if(number%factor===0)
             return false;
            
    
    return true;
}