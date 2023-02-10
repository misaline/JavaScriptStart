// örnekler 
let numm = 15.123456789;

//toplamda 3 basamaklı sayı kullan
console.log(numm.toPrecision(3));


//ondalık kısmı 3 basamakta sınırla
console.log(numm.toFixed(3));

//en yakın sayıya yuvarla
console.log(Math.round(numm));

//aşağı yuvarla
console.log(Math.floor(numm));

//yukarı yuvarla
console.log(Math.ceil(numm));

// 1,2,10,56,20 sayılarının en küçüğünü ve en büyüğünü bul
console.log(Math.min(1, 2, 10, 56, 20));
console.log(Math.max(1, 2, 10, 56, 20));

//sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üret
let minn = 50;
let max = 100;
console.log(Math.floor(minn + Math.random() * (max - minn))); //50 den başladık (minn+)


/* Bir personelin yaptığı mesaiye göre aldığı maaşı hesapla
    ** Brüt maaş  : 3700 TL
    ** Brüt mesai : 10.3 TL
    Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir?
    Brüt maaş üzerinden toplam kesinti oranı %25 ise 
    alınacak toplam net maaş nedir?
 */
let bMaas = 3700;
let mesai = 10.3;
let toplamBM = bMaas + (mesai * 42);
let netMaas = toplamBM - (toplamBM * 0.25);
console.log("Brüt maaş + Mesai: " + toplamBM);
console.log("Net maaş + Mesai: " + netMaas.toFixed(2));
