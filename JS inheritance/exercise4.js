function HtmlImageElement(src){
    this.src=src;

    this.render=function(){
        return`<img src='${this.src}'>`
    }
    this.render2=function(){
        return `
        <select>${this.items.map(item=>`
        <option>${item}</option>`.join('')}
        </select>`
    }
}
   
const renderItem=item=>`<option>${item}</option>`;