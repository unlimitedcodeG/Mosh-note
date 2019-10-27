const videro={
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(){
            console.log(this.title,tag)
        },this)
    }
}
video.showTags();
//----------------------------------------------------------
const videro={
    title:'a',
    tags:['a','b','c'],
    showTags(){
        const self=this;
        this.tags.forEach(function(){
            console.log(self.title,tag)
        },this)
    }
}
//------------------------------------------------------------
function playVieo(){
    console.log(this);
}
playVieo.call({name:'Mosh'},1,2);//{name:'Mosh'}
playVieo.apply({name:'Mosh'},[1,2]);//{name:'Mosh'}
const fn=playVideo.bind({name:'Mosh'});
fn();
//===playVideo.bind({name:'Mosh'})()
playVieo()//windows
//----------------------------------------------------------
const videro={
    title:'a',
    tags:['a','b','c'],
    showTags(){
       
        this.tags.forEach(function(){
            console.log(this.title,tag)
        }.bind(this))
    }
}
// the arrow function inherit this
const videro={
    title:'a',
    tags:['a','b','c'],
    showTags(){
       
        this.tags.forEach(tag=>{
            console.log(this.title,tag)
        })
    }
}