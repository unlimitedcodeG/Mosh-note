const circle={
    radius:1
};
circle.color='yellow';
circle.length='3.14'
circle.draw=function(){};
delete circle.color;
delete circle.draw;
console.log(circle);