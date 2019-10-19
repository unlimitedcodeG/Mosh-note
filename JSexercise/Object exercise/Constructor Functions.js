let post={
    title:'a',
    body:'b',
    anthor:'c',
    views:10,
    comments:[
        {anthor:'a',body:"b"},
        {anthor:'c',body:'d'}
    ],
    isLive:true
};
//-----------------------------------------
let post=new Post('a','b','c')
console.log(post);
function Post(title,body,author,){
    this.title=title;
    this.body=body;
    this.anthor=anthor;
    this.views=0;
    this.comments=[];
    this.isLive=false;
}