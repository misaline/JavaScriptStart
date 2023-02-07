// // // DERS 3: DEĞİŞKEN TİPLERİ 

// // // pritive types

// // // string
// // let firstname = "zzehra";
// // console.log(typeof firstname); //değişken tipini kontrol eder typeoff

//-------------------------------------------------------------------------

// // //number
// // let age = 30;
// // console.log(typeof age);
// // let money = 10.5;
// // console.log(typeof money);

//-------------------------------------------------------------------------

// // //boolean genelde koşul durumlarda kullanılır. (doğru , yanlış)
// // let isActive = true;
// // console.log(typeof isActive);

// // isActive = false;
// // console.log(typeof isActive);
//-------------------------------------------------------------------------

// // //null boşluğu temsil eder.
// // let job = null;
// // console.log(typeof job); //object olarak gözüküyor ama primiitive de yer aldığını bilmek gerek.
//---------------------------------------------------------------------------------------------------

// // //undefined
// // let car;
// // console.log(typeof car);
//--------------------------------------------------------------------------


// // // reference types - objects

// // //Array
// // let names = ["zehra", "samet", "şukufe"];
// // console.log(typeof names);
//--------------------------------------------------------------------------

// // //object
// // let adress = {
// //     city: "istanbul",
// //     country: "turkey"
// // }
// // console.log(typeof adress);
//---------------------------------------------------------------------------

// // //function
// // var calculateAge = function () {
// //     return 0;
// // }
// // console.log(typeof calculateAge);

// // //------------------------------------------------------------------

// // // DERS 4 : TÜR DÖNÜŞÜMÜ
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
//-------------------------------------------------------------------------

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