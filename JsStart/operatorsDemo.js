// Demo : Operators 

// 1 - Can ve Ada'nın boy ve kg bilgilerini alın.

let val;
let CanBoy = 1.70;
let CanKilo = 75;

let AdaBoy = 1.65;
let AdaKilo = 62;

// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
let CanIndex = (CanKilo) / (CanBoy * CanBoy);
console.log(CanIndex.toFixed(1)); // virgülden sonraki basamak sayısını belirlemek çin toFixed() kullanılır. 
let AdaIndex = (AdaKilo) / (AdaBoy * AdaBoy);
console.log(AdaIndex.toFixed(2));

// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
val = CanIndex == AdaIndex;
val = AdaBoy > CanBoy;
val = AdaBoy <= CanKilo;
val = AdaKilo >= CanKilo;
val = AdaKilo != CanKilo;
val = AdaKilo === CanKilo;
val = AdaKilo < CanKilo;
console.log("Canın kilo indeksi Adanın kilo indeksinden büyüktür: " + val);

// 4 - Aşağıdaki tabloya göre Can ve Ada hangi gruptadır?
// 0 - 18,4: Zayıf;
// 18,5 - 24,9: Normal;
// 25,0 - 29,9: Fazla Kilolu;
// 30,0 - 34,9: Şişman (Obez);

let CanZayif = (CanIndex >= 0) && (CanIndex <= 18.4);
let CanNormal = (CanIndex >= 18.5) && (CanIndex <= 24.9);
let CanKilolu = (CanIndex >= 25) && (CanIndex <= 29.9);
let CanObez = (CanIndex >= 30) && (CanIndex <= 34.9);

console.log("Can Zayif " + CanZayif);
console.log("Can Normal " + CanNormal);
console.log("Can Kilolu " + CanKilolu);
console.log("Can Obez " + CanObez);



