const courses=[
   {id :1,name:'a'},
   {id :2,name:'b'}
];
//console.log(course.includes({id:1,name:'a'})); false
console.log(courses.find(function(course){
    return  course.name==='a'; 
}))// return {id:1,name:'a'}
const course=courses.find(function(course){
    return  course.name==='a'})
    console.log(course)//{id:1,name:'a'}
    const course=courses.find(function(course){
        return  course.name==='xyz'})
        console.log(course)//undefined
        //arrow function
        const course=courses.find(course=>course.name==='a');
        console.log(course)