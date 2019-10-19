//Speed Limit =70;
//5 ->1 point
//Math.floor(1.3)
//12 points ->suspended
checkSpeed(50);//Ok
checkSpeed(70)//Ok
checkSpeed(71)
function checkSpeed(speed){
 const speedLimit=70;
 const kmPerPoint=5;
 if(speed<speedLimit+kmPerPoint)
 console.log('Ok');
 return;//reduece indence
}
const ponts=Math.floor((speed-speedLimit)/kmPerPoint);
if(points>=12)
console.log('License suspanded');
else
    console.log('Point',points)
    //shift tab
