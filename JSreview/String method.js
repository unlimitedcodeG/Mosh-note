//String Primitive;
const message='h1';
//String object
const message='This is my first message'
message.includes('my')// true;
message.endsWith('my');
message.startsWith('my');
message.indexOf('my') //8
message.replace('first','second');
message.toUpperCase();
message.toLowerCase();
message.trim()//delete start and end space;
message.trimLeft();
message.trimRight();
message.split(' ')// ["This"]... and so on
const message='This is \n my \'first message\''
const another=new String('h1')