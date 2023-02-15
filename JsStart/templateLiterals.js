// Template Literals

const fullName = "Zehra Akdoğan";
const city = "İstanbul";
const yearOfBirth = 1996;
let val;


val = "My name is " + fullName + " I'm " + (2023 - yearOfBirth) + " years old " + "and I live in " + city;
val = `My name is ${fullName} I'm ${(2023 - yearOfBirth)} years old and I live in ${city}`; //+ ile birleştirmeye alternatif ve daha pratik

// ternary operator
val = `My name is ${fullName} I'm ${(2023 - yearOfBirth >= 18) ? "over 18" : "under 18"} years old and I live in ${city}`; // 2023'ten 1996 dan çıkardık ve sonuç >= 18 ise soru işareti açıyoruz.
//2 string ifade yazıyorsak araya : koymamız gerekli. Eğer değer true ise yani 18e eşit büyükse over 18 yazacak. False ise (:) sonraki string gözükecek. under 18.

console.log(val);