function star(){
    const message='h1';
    if(true){
        const another='bye';
    }
    console.log(another)
}
   console.log(message);
   //we can't access this const
star()//Error
function start(){
    const message='h1';
    if(true){
        const another='bye';
    }
    for(let i=0;i<5;i++){
    console.log(i)
    }
    //console.log(i) Error
}
start()