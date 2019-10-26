function HtmlElement(){
    this.click=function(){
        console.log('clicked')
    }
}
HtmlElement.prototype.focus=function(){
    console.log('focued')
}
function HtmlSelectElement(items=[]){
    this.items=items;
    this.addItems.push(item);
}
this.removeItem=function(item){
    this.items.splice(this.items.indexOf(item),1)
}
HtmlSelectElement.prototype=new HtmlElement();
HtmlSelectElement.prototype.constructor=HtmlSelectElement;
new HtmlSelectElement.prototype.constructor();
new HtmlSelectElement()
HtmlSelectElement.prototype=Object.create(HtmlElemnt.prototype)