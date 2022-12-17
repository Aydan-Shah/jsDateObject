let value;

const now = new Date();

const  date1 = new Date("9-19-1993 06:15:00");
const date2 = new Date("September 19 1993");
const date3 = new Date("9/19/1993");

value = date1;
value = date1.getMonth(); // 0dan bashlayir
value = date1.getDate(); // ayin gunu 1den bashlayir
value = date1.getDay(); // heftenin gunun gosterir 0 bazar olur
value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();


date1.setMonth(7);
date1.setDate(15);
date1.getFullYear(1994);
date1.setHours(0);
date1.setMinutes(15);
date1.getSeconds(30);
value = date1;









// console.log(now);

console.log(value);