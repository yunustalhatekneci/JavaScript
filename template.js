// Single comemnt
/*
multiple comments
*/

// window.
//document
// console.log("Merhaba");

// // Log
// window.console.log("Window Console Log");

// // warn
// console.warn("Console Warn"); 

// // Info
// console.info("Console Info");

// // Error
// console.error("Console Error");

// // Alert
// window.alert("Alert Mesajı");

// // Variable
// // var, let, const
// // Common Rules
// var myName = "YTT";
// console.log(myName);

// var myName54 = "YTT";
// console.log(myName54);

// var _myName = "YTT";
// console.log(_myName);

// var $_myName = "YTT";
// console.log($_myName);

// // yazılmaz
// // var üğşçö~$_myName = "YTT";
// // console.log(üğşçö~$_myName);

// let myName2 = "YTT2";
// myName2 = "YTT2 Data";
// console.warn(myName2);

// // Kullanamazsın
// // let myName2 = "YTT2";
// // console.warn(myName2);

// // CONST
// const myName3 = "YTT3 JS";
// console.error(myName3);

// // const değişmez
// // myName3="YTT JS HTML5";
// // console.error(myName2);

// // OPERATORS
// let yttData1 = 23;
// let yttData2= 2;

// // Articmatics Operators
// console.log(yttData1 + yttData2); // 25
// console.log(yttData1 - yttData2); // 21
// console.log(yttData1 * yttData2); // 52
// console.log(yttData1 / yttData2); // 11.5

// // Remainder Operator
// console.log(yttData1 % yttData2); // 1  

// // Karşılaştırma Operatorleri
// console.log(yttData1 > yttData2); // true
// console.log(yttData1 < yttData2); // false
// console.log(yttData1 >= yttData2); // true
// console.log(yttData1 <= yttData2); // false
// console.log(yttData1 == yttData2); // false
// console.log(yttData1 === yttData2); // false

// // Atama Operatorleri
// const data1=10, data2="10";
// console.log(data1 == data2); // true
// console.log(data1 === data2); // false

// // Mantıksal Operator
// const data3=true, data4=false;
// console.log(data3 && data4); // false
// console.log(data3 || data4); // true
// console.log(!data3); // false

// // Promt
// const userData=prompt("Lütfen adınızı giriniz");
// console.log(userData);

// // Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25));
// console.log(Math.abs(-25));
// console.log(Math.floor(25.7));
// console.log(Math.ceil(25.7));
// console.log(Math.round(25.7));
// console.log(Math.asin(-1));
// console.log(Math.cos(-1));
// console.log(Math.tan(-1));

// // Espace Characters
// console.log("\u00A9");
// console.log("\u00AE");
// console.log("\u2122");

// // TypeOf
// let data = 44;
// console.log(typeof number); // number
// let name="YTT";
// console.log(typeof name); // string
// let isLogin=true; 
// console.log(typeof isLogin); // boolean

// // InstanceOf
// let obj = {name: "YTT"};
// console.log(obj instanceof Object); // true

// // New : Doğdu

// let numb = new Number(42);
// console.log(numb);
// // Null : Vefat
// numb =null;
// console.log(numb);

// // undefined
// let dataNumber;
// dataNumber =0;
// console.log(dataNumber);

// // NaN
// let result=10/10;
// console.log(result);

// let result2=10/"10";
// console.log(result2);

// let result3=10/"abc";
// console.log(result3);
// console.log(isNaN(result3));
// console.log(!isNaN(result3));

// // hoisting
// dataNumber2=55;
// var dataNumber2;
// console.log(dataNumber2);


// // Sayılsal İşlermler
// let numb1=10;
// let numb2="20";
// console.log(numb1+numb2); // 30
// console.log(Number(numb1)+Number(numb2)); // 30
// console.log(String(numb1)+String(numb2)); // 1020

// // Sayılsal İşlermler(cast)
// let numb3=10;
// let numb4="20";
// console.log(numb3+Number(numb4)); // 30
// console.log(Number(numb3)+parseFloat(numb4)); // 30.0
// console.log(parseFloat(numb3)+parseFloat(numb4)); // 30.0
// console.log(parseInt(numb3)+parseInt(numb4)); // 30

// // toFixed
// const sayi=56.123234346;
// console.log(sayi.toFixed(2)); // 56.12
// console.log(sayi.toPrecision(4));

// Metinsel İşlemler
// let yttMetinsel = "   Javascript öğreniyorum javascript";
// let yttMetinsel2 = " html5, css3, js";
// console.log(yttMetinsel);
// console.log(yttMetinsel.length); // 33
// console.log(yttMetinsel.trim().length);
// console.log(yttMetinsel.toUpperCase()); // JAVASCRIPT Ö��RENİYORUM JAVASCRIPT
// console.log(yttMetinsel.toLowerCase()); // javascript öğreniyorum javascript
// console.log(yttMetinsel.indexOf("javascript")); // JAVASCRIPT
// console.log(yttMetinsel.lastIndexOf("javascript")); // 19
// console.log(yttMetinsel.includes("javascript"));

// console.log(yttMetinsel+" " +yttMetinsel2+yttMetinsel);
// console.log(yttMetinsel.concat(yttMetinsel2));
// console.log(yttMetinsel.substring(3));
// console.log(yttMetinsel.substring(0,3));

// // 1-Returnsuz parametresiz
// function returnsuzParametresiz(){
//     console.log("Parametresiz fonksiyon çağrısı");
// }
// returnsuzParametresiz();

// // 2-Returnsuz parametreli
// function reurnsuzParametreli(kelime, number){  
//     console.log("Parametreli fonksiyon çağrısı"+" " +kelime+ " "+number);
// }
// reurnsuzParametreli("YTT", 24);

// // 3-Parametreli ve return eden
// function parametreliVeReturnEden(kelime, number){
//     return kelime+ " "+number;
// }
// console.log(parametreliVeReturnEden("YTT", 24));

// // 4- Parametresiz ve return eden (default değerli)
// function parametresizVeReturnEdenDefault(kelime="YTT", number=24){
//     return kelime+ " "+number;
// }
// console.log(parametresizVeReturnEdenDefault());




// Exception Handling
const exceptionHandling = () => {
     // const result=10/0;
    
    try{
        alertx("Alert");
        

    }catch(err){
        console.error(err);
    } finally{
        console.warn("Burası mutlaka çalışmalıdır");

    }
    console.log("Merhaba-1");

    
    throw new Error("Neden sayıyı sıfıra böldün");
    console.log("Merhaba-2");


}
exceptionHandling()