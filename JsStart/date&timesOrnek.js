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

// ** Her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2023 yılında ne zaman kutlanacaktır?
// ** Yaş hesaplama nasıl yapılır?