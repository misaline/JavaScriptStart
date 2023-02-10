// Numbers

let val;

val = Number("10"); //string bir ifadeyi number' e dönüştürdük.
val = parseInt("10");  //string bir ifadeyi number' e dönüştürdük.
val = parseFloat("10.5"); //ondalıklı sayıyı gösterir ve numbere çevirir.
val = parseInt("a10a"); //a ile başladığı için NaN(notanumber)
val = isNaN("10"); // number olduğu için false döndürür.
val = isNaN("10"); // number olmadığı için true döndürür.

var num = 10.123456789;
val = num.toPrecision(6); // 6 basamak göster 
val = num.toFixed(2); // virgülden sonra 2 basamak göster 

val = Math.PI; //pi sayısını gösterir.
val = Math.round(2.4); //yuvarlama yapar 2
val = Math.round(2.7); //3
val = Math.ceil(2.3); //her zaman yukarı yuvarlar 3
val = Math.ceil(2.7); //3
val = Math.floor(2.4) //her zaman aşağı yuvarlar. 2
val = Math.floor(2.8); //2
val = Math.sqrt(25); //karekök bilgisni verir.
val = Math.pow(2, 4); //2 üzeri 4 üssü hesaplar
val = Math.abs(-10); //mutlak değer gösterir +10
val = Math.min(1, 2, 2, 45, 5); //verilen sayılardan en küçüğünü gösterir.
val = Math.max(1, 5, 8, 9, 6);//verilen rakamlardan en büyüğünün gösterir.
val = Math.floor(Math.random() * 100 + 1); //random rastgele 0-1 arasında değer oluşturur. *100+1 yapmamızın nedeni, 0-100 arasında rastgele sayı göstermesi

console.log(val);
