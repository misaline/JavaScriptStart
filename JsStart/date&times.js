// Data Object

let d = new Date();
let birthday = new Date(1996, 5, 10);

// Set Methods (tarih objesini değiştirebliriz.)
d.setFullYear(2025);
d.setMonth(6);
d.setDate(20);
d.setHours(10);
d.setMinutes(21);
d.setSeconds(10);


// Get Methods
console.log(d.getDate());
console.log(d.getDay()); //haftanın kaçıncı günü olduğunu söyler. 0.gün Pazar,  1. Pazartesi ...
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());  // 0. ay Ocak 1. ay Şubat ...
console.log(d.getMinutes());
console.log(d.getSeconds()); //saniye

console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());

console.log(d);
console.log(typeof d);

