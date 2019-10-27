const video={
    title:'a',
    play(){
        console.log(this);
    }
};
video()//  {title:'a',play(){ console.log(this);}
function playVideo(){
    console.log(this);
}
playVideo();
// windows or global regular function
// if we use the constructor funtion 
function Video(title){
    this.title=title;
    console.log(this);
}
const v= new  Video('b');//Video{title:'b'} create a empity Object
//we create the consturctor function,is equal to create a empity 
//Object,then,this point to Object
//-----------------------------
const video={
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this,tag);
        });// this function is regular function,not callbackfunction point to window 
        //is not in method in this Object video 
        // only method is showTags,global Object exerting this function
    }
};
video.showTags();








const video={
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        },this);//give forEach method second arg a 'this'
    }
};
video.showTags();