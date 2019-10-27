const now= new Date();
const date1=new Date('May 11 2018 09:00');
const date2=new Date(2018,4,11,9);
now.setFullYear(2017);
now.toDateString()
now.toTimeString();
now.toISOString()// applicate on Web server method return the time