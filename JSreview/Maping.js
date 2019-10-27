const numbers=[1,-1,2,3];
const filtered=numbers.filter(n=>n>=n);
const item=filtered.map(n=>'<li>'+n+'<li>');
const html='<ul>'+item.join('')+'</ul>';//'' delete ,
console.log(filtered);
console.log(html)
const obj=filtered.map(n=>({value:n}));//put {} Object to ()
//The last formotion chaining
const numbers=[1,-1,2,3];
const items=numbers
.filter(n=>n>=0)
.map(n=>({value:n}))
.filter(obj=>obj.value>1);
console.log(item)