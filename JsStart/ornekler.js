// Örnekler

let fullName = "Zehra Akdoğan";
const customid = "12324105828";
let total = 10;
let gender = true; //true kadın false erkek

//object türü
let address = {
    country: "turkey",
    city: "istanbul",
    district: "bahçeşehir",
    body: "bahçeşehir 1. kisim"
}

//array türü
let hobbies = ["spor", "kitap", "anime"];

//-------------------------------
//aşağıdaki siparişlern toplamını hesaplayınız

let order1 = Number("100");
let order2 = Number("150");

let totalOrder = order1 + order2;
console.log(totalOrder);

//aşağıdaki siparişlern toplamını hesaplayınız
let order3 = Number("100.2");
let order4 = Number("150.5");

let totalOrderr = order3 + order4;
console.log(totalOrderr);

//aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız
let order5 = parseInt("100.2");
let order6 = parseInt("150.5");

let totalInt = order5 + order6;
console.log(totalInt);

//aşağıda verilen doğum yılına göre yaş hesaplayınız.
const yearOfBirth = 1996;
console.log(new Date().getFullYear() - yearOfBirth); //tarayıcıdan alınan trih ile tanımladığımız tarihi çıkarttık.

//aşağıdaki string ifadenin karakter sayısını bulunuz.
let course = "modern javascript kursu";
console.log(course.length);