//Function Declaration
function work(){
    console.log('work')
}
//Function Expression
let run=function(){
    console.log('run')
};
let move=run;
run();
move() //the same for above
// let x=1;