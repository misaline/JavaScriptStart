// Demo : Strings

let sentence = " Template Literals or template strings is the ability have multi-line strings without any funny business. ";

let url = "http://sadikturan.com/Modern Javascript Kursu sıfırdan ileri seviye";

let a;
// Cümle kaç karakterlidir?
console.log(sentence.length);
console.log(url.length);

// Kaç kelimeden oluşuyor?
console.log(sentence.split(" "));

// Tüm cümleyi küçük harfe çevirin.
console.log(sentence.toLowerCase());
console.log(url.toLowerCase());

// Cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.replace(" ", ""));

// " - " karakterini silin.


// url'nin içinden str kısmını çıkarınız.
let str = "https://";

// url hangi protocol'u kullanmaktadır? (http , https)


// url '.com' ifadesini içeriyor mu?
console.log(url.indexOf(".com"));

// url string ifadesini geçerli bir url olarak düzenleyiniz.
console.log(url.replace("http://sadikturan.com/Modern Javascript Kursu sıfırdan ileri seviye", "http://sadikturan.com/ModernJavascriptKursusifirdanileriseviye"));