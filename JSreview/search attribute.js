const circle={
    radius:1,
    draw(){
        console.log('draw');
    }
};
for(let key in circle)
console.log(key,circle[key])
//radius:1;draw f draw(){ console.log('draw')};
for(let key of circle)
console.log(key);
// circle is not iterable only use to Array or Map
// conclusion:Object is not iterable;
for(let key of Object.keys(circle));
console.log(key);
//  radius,circle
for(let key of Object.entry(circle));
console.log(entry);
// ["radius",1] ["draw",f]
for ('radius' in circle)
console.log('yes')