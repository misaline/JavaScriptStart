// // // // console.log("merhaba");
// // // // console.log(1234);
// // // // console.log(true);
// // // // console.log([1, 2, 3]);
// // // // console.error("hata");
// // // // console.warn("uyarı");
// // // // //tek satıt yporum

// // // // /*

// // // //     yorums atyttıyrhtjmnh
// // // //     fmjlkmgd,
// // // //     gmrfel

// // // // */
// // // // console.clear();


// // // /*hepsini seç  ctrl+k+c hepsini yorum saatırı yapar */

// // //.................................................................

// // // // Ders 2: değişkenler

// // // var age;
// // // console.log(age);
// // // age = 20;
// // // console.log(age);

// // // var fullname = "zehra akdoğan";
// // // console.log(fullname);
// // // fullname = "samet";
// // // console.log(fullname);

// // // // değişken tanıma kuralları
// // // // sayısal ifade ile başlayamaz
// // // var yas1;
// // // var _yas2;
// // // var $yas3;

// // // // komut isimleriyle tanımlama yapılamaz. var for yanlış
// // // // birden fazla kelime

// // // var ad = "zehra";
// // // var soyad = "akdoğan";

// // // var ad_soyad = "za";


// // // // case sensitive (büyük küçük duyarlılığı)

// // // var firstname = "zehra";
// // // var Firstname = "samet";

// // // console.log(firstname);
// // // console.log(Firstname);

// // // // var, let , const
// // // let city = "const";
// // // console.log(city);

// // // const email = "dd@gmail.com"; //const sadece bir kere tanımlanabilir. sonrasında değiştirilmez.
// // // console.log(email);

// // // email = "dv@gmail.com"
// // // console.log(email);

// // //------------------------------------------------------------------

// // // Ders 3 : değişken tipleri

// // // pritive types

// // // string
// // let firstname = "zzehra";
// // console.log(typeof firstname); //değişken tipini kontrol eder typeoff

// // //number
// // let age = 30;
// // console.log(typeof age);
// // let money = 10.5;
// // console.log(typeof money);

// // //boolean gednelde koşul durumlarda kullanılır. doğru yanlış
// // let isActive = true;
// // console.log(typeof isActive);

// // isActive = false;
// // console.log(typeof isActive);

// // //null boşluğu temsil eder.
// // let job = null;
// // console.log(typeof job); //object olarak gözüküyor ama primiitive de yer aldığını bilmek gerek.

// // //undefined
// // let car;
// // console.log(typeof car);


// // // reference types - objects

// // //Array
// // let names = ["zehra", "samet", "şukufe"];
// // console.log(typeof names);

// // //object
// // let adress = {
// //     city: "istanbul",
// //     country: "turkey"
// // }
// // console.log(typeof adress);

// // //function

// // var calculateAge = function () {
// //     return 0;
// // }
// // console.log(typeof calculateAge);

// // //------------------------------------------------------------------

// // // Ders 4 : Tür Dönüşümü 
// let num1 = "5";
// let num2 = "10";
// console.log(num1 + num2); //string ifade olduğu için yanyana yazdı 510
// console.log(typeof num1);

// let num3 = Number("5");
// let num4 = Number("10");

// let total = num3 + num4;
// console.log(total); //number tipini kullanarak saysal hale getirdik
// console.log(typeof num3);
// console.log(typeof num4);


// let val;

// //number to string 
// val = String(10);
// console.log(val);
// console.log(typeof val);
// console.log(val.length); //uzunluğunu gösterir

// //bool to string
// val = String(true);

// //date to string 
// val = String(new Date());

// //array to string
// val = String([1, 2, 3, 4]); //virgüllerle sayar 7

// //toString()
// val = (10).toString(); //string e çevirir daha kolay kullanımlı.
// val = (false).toString();

// //string to number
// val = Number("10");
// val = Number("a"); // NaN not a number sayısal bir değere eşit değil 
// val = Number([1, 2, 3, 4]); //NaN dizilerde de sayısal ifadeye çeviremedi

// //parsInt
// //parsFloat  number a denk geliyor ikiside

// val = parseInt("10");
// val = parseInt("10.5"); //yuvarlar tam sayıya 10
// val = parseFloat("10.5"); //virgüllü gösterir.

// console.log(val);
// console.log(typeof val);
// console.log(val.length); //uzunluğunu gösterir lenght özedlliği sadece string ifadelere kullanılır.
// console.log(val.toFixed(2))

//------------------------------------------------------------------------------------------------------------

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
//aşağıdaki siparişlern tolamını hesaplayınız

let order1 = Number("100");
let order2 = Number("150");

let totall = order1 + order2;




















