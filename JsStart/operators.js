// Operatörler

let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3;

// 1- Aritmetik Operatörler

val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b; //mod alma genelde sayı tek mi çift mi diye kontrol ediyoruz. 
val = d++; //val değişkenin içine değerini atar sonra 1 artırır. 3 gözükür 
console.log(d); //1 arttırılmış hali
val = ++d; //ilk öncec artırır sonra d yi atar. 5 gösterir.
val = --d;
val = d--;


// 2- Atama Operatörleri

val = a; // a yı val e atadı.
val += a; // val = val + a; 20
val -= a; // val = val - a; 10
val *= a; // val = val * a 100; 
val /= a; // val = val / a; 10
val %= a; // val = val % a; 0

// 3- Karşılaştırma Operatörleri

val = a == b; // false
val = b == c; // true
val = b === c; // üç eşittir , değer & type kontrolü yapılıyor 
val = 5 === "5"; //biri number biri string olduğu için false verir. iki eşittir ile true verir çünkü type kontrolü yapmaz.
val = a != b; // a b'ye eşit değil true
val = a !== b; // a b'ye eşit değil true
val = a < b;
val = a > b;
val = a >= b;
val = a <= b;


// 4- Mantıksal Operatörler

// && (And)
// true && true   => true 
// true && false  => false 
// false && false => false 

val = (a > b) && (a > c)

// || (Or)
// true || true   => true 
// true || false  => true 
// false || false => false 

val = (a > b) || (a < c)

// ! (Not)
// !true  => false
// !false => true 

val = (a > b) //true
val = !(a > b) //false - değilini alıyor.



console.log(val);
console.log(typeof val);