// ** Şimdiki tarihin gün, ay ve yıl bilgisini yazdırınız.
let d = new Date();
console.log(d.getDate(), d.getDay(), d.getFullYear());

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
let tS = new Date(); //pc den çeker
console.log(tS);

tS = new Date("6/10/1996 10:00:05"); //manuel olarak da yapılabilir
console.log(tS);

// ** 1/1/1990 tarihinden bir gün öncesini gösteriniz.
let dtC = new Date("1/1/1990"); //tarihi string olarak tanımla
let dayOfMonth = dtC.getDate();  //kaçıncı gün olduğunu içeriden aldık
dtC.setDate(dayOfMonth - 1); // günden -1 yaptık bir önceki ayın son günüe eşit oduğu için
console.log(dtC);

// ** İki tarih arasındaki geçen zamanı bulunuz.
let date1 = new Date("02/09/2023");
let date2 = new Date("02.09.2022");
let milisecond = date1 - date2;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;


console.log("milisaniye: " + milisecond);
console.log("saniye: " + saniye);
console.log("dakika: " + dakika);
console.log("saat: " + saat);
console.log("gun: " + gun);



// ** Her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü
//    2023 yılında ne zaman kutlanacaktır?
let motherDay = new Date();
motherDay.setHours(0, 0, 0, 0); // saatle işimiz olmadığı için sıfırladık
motherDay.setFullYear(2023); // hangi yıldaki anneler gününü istediğimiz
motherDay.setDate(1); // 1. güne konumlandırdık /mayısın 1. günü
motherDay.setMonth(4); // mayıs istedik 

while (motherDay.getDay() != 0) { // (while= iken motherDay getDay(bana dönen değer) 0 yani pazar değilse 
    motherDay.setDate(motherDay.getDate() + 1) //yeni gün arayışına giriyor. 0 a eşit olana kadar 1 ekliyoruz.
}
motherDay.setDate(motherDay.getDate() + 7); //1. hafta değil 2. haftaya denk gelsin diye 7 gün ekledik. 
console.log(motherDay);



// ** Yaş hesaplama nasıl yapılır?
let birthDay = new Date("06/10/1996");
let ageDifMS = Date.now() - birthDay.getTime();//şimdiki milsecondtan birthday milisecond cinsinden çıkardık.
let ageDate = new Date(ageDifMS);
console.log(ageDate.getFullYear() - 1970); //Milisecond başlangıç tarihi 1970dir. yaş hesaplamasında 1970 i çıkarmak zorundayız bu yüzden.

// console.log(birthDay.getTime()); //milisaniye cinsinden gösterir 1970 den yazdığımız tarihe kadar milisaniye gösterir.
// console.log(Date.now()) // şimdiki tarihin  milisecond cinsinden gösterir.
