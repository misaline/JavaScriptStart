// Strings

const firstName = "Zehra Misa";
const lastName = "Akdoğan";
const age = 27;
let val;

//string concatenation  

val = firstName + " " + lastName
val = "Zehra Misa";
val += " Akdoğan"

val = "Ben, " + firstName + " " + lastName + ". " + age + " yaşındayım." + ' Istanbul\'da yaşıyorum.' //tek tırnak ile işlem yaptığımızda kesme işaretinin önüne ters slaş eklemek gerekir.

//string concat
val = firstName.concat(" ", lastName); //başka string ifade ile birleştirme işlemi yapılabilir.

//strinng uppercase - lowercase
val = val.toUpperCase(); // val deki değerleri büyük harfle yazar.
val = val.toLowerCase(); // val deki değerleri küçük harfle yazar.

//val = val[2]; //0 dan başlayarak index değerini gösterir. Z=0 E=1 H=2 gibi..

//val = val.indexOf("m"); //string ifadelerde aradığımız harf ya da kelime olduğunda kullanırız. M harfi 6. index ile başladığı için 6 yı gösterir
//val = val.indexOf("ş"); // val değişkenin içinde ş olmadığı için consoleda -1 gösterir.

// substring
//val = val.substring(3, 7); //val değişkeninde ki ifadeyi belli aralıklara ayırıp console de gösterebiliriz. 

// slice 
//val = val.slice(5); //5. karakterden sonrasını getir. 
//val = val.slice(2, 3); // 2. ve 3. index değerlerini gösterir.
//val = val.slice(-3); //geriden başlayarak metni gösterir. 

// string replace
//val = val.replace("zehra", "samet") //değiştirmek istediğimiz değer için kullanırız. ilk önce var olan sonra yeni değerini yazıyoruz.

// trim


//string lehght
//val = val.length; //kaç karakterden oluşturuduğunu gösterir. boşluk dahildir.





console.log(val);
console.log(typeof val);
