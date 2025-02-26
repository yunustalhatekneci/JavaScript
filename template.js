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
// const exceptionHandling = () => {
//      // const result=10/0;
    
//     try{
//         alertx("Alert");
        

//     }catch(err){
//         console.error(err);
//     } finally{
//         console.warn("Burası mutlaka çalışmalıdır");

//     }
//     console.log("Merhaba-1");


//     throw new Error("Neden sayıyı sıfıra böldün");
//     console.log("Merhaba-2");


// }

// exceptionHandling()
// Debug

const debugData = () => {
    let value = "YTT";
    for(let i=0; i<10; i++){
        console.log(value + " "+i);

        if(i==4){
            debugger;
        }

    }
}
// debugData();

// SetTimeout
const setTimeoutFunction = () => {

// Arrow Function
 setTimeout(() => {
    console.log("2 saniye sonra çalış ve dur");
    
}, 2000);
// Anonymus Function
setTimeout(function() {
    console.log("2 saniye sonra çalış ve dur");
}, 2000);
}
// setTimeoutFunction();

const setIntervalFunction = () => {

    // Arrow Function
    // setInterval(() => {
    //     console.log("2 saniye sonra çalış ve devam et");
    //      }, 1500);

    // Anonymus Function
    setInterval(function() {
        console.log("2 saniye sonra çalış ve devam et");
        }, 1500);
    }
    // setIntervalFunction()
    
    const setIntervalFunction2 = () => {

              // Arrow Function
        let clockTime=() => {
            console.log("1 saniye çalışsın");
        }
        let intervalID=    setInterval(clockTime, 1000);
        setTimeout(() => {
            clearInterval(intervalID);
            console.log("5 saniye sonra dur");
            
        }, 5000);
        }
        //  setIntervalFunction2();

        // Monad
        const monad = () => {
        const data1=(number) => {
            return Math.sqrt(number);
        }    
        const data2=(number) => {
            return Math.pow(number,3);
        }
       let result= data2(data1(25));
       console.log(result);  
    }
    // monad()

        // Senkron ve Asenkron
        // Callback Function
        const callbackFunction = () => {
            const data1 = (number, callback) => {
                setTimeout(() => {
                    callback(number);
                }, 2000);
            }
            const data2 = (number, callback) => {
                setTimeout(() => {
                    callback(number);
                }, 1000);
            }
            data1(10, (number1) => {
                console.log("data 1 " +number1);
                data2(number1, (number2) => {
                    console.log("data 2 " +number2);
                })

        })
    }
        // callbackFunction()

        const promiseFunction = () => {

            function data1(number) {
                const isLogin=false;
                // resolve=başarılıysa
                // reject=hatalıysa
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if(isLogin){
                            console.log(number + " Promise çalıştı");
                            resolve(number);
                        }else{
                            reject("Promise çalışmadı");
                        }
                    }, 2000);
                }
            )
                
            }
            let result = data1(10);
            console.log(result);
            

        }
// promiseFunction()

        // asyncAwaitFunction

        const asyncAwaitFunction = () => {
            function promiseFunction(number) {
                const isLogin = true;
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (isLogin) {
                            console.log(number + " Promise çalıştı");
                            resolve(number);
                        } else {
                            reject("Promise çalışmadı");
                        }
                    }, 2000);
                }).then((response) => {
                    console.log("Response : " + response);
                }).catch((err) => {
                    console.error(err);
                });
            }
        
            // asyncAwaitData function
            let asyncAwaitData = async () => {
                try {
                    let asynData = await promiseFunction(44);
                    console.log(asynData);
                } catch (err) {
                    console.error(err);
                }
            };
        
            asyncAwaitData();
        };
        
        // asyncAwaitFunction();

        // diziler
        const arrayFunction = () => {
        let array=[1,2,3,4,5];
        array[5]=6;
        array[6]=9;
        //  console.log(array);
         document.writeln(array);
         document.writeln("<br/>");
         document.writeln(array[0]);
         document.writeln(array[7]);
         document.writeln("<br/>");
         document.writeln("Lenght : "+array.length);
         document.writeln("<br/>");
         document.writeln(array[array.length-1]);



        }
// arrayFunction()

//  Array Data Set
 const arrayDataSet = () => {
    let array = [9,1,2,6,3,5,4];
return array;
    }



// Diziler Döngüler
    const arrayLoop = () => {
        let array = arrayDataSet();
        // iterative for
        for(let i=0; i<array.length; i++){
            document.writeln(array[i]);
        }
        document.writeln("<br/>********<br/>");

        // for in
        for(let data1 in array){
            document.writeln(array[data1]);
        }
        document.writeln("<br/>********<br/>");
        // for of
        for(let data2 of array){
            document.writeln(data2);
        }
    }
    //  arrayLoop()

    // push, unshift, pop, shift, delete
    const arrayMethod = () => {
        let array = arrayDataSet();
        for(let data of array){
            document.writeln(data);
        }

    document.writeln("<br/>********<br/>");
    array.push(10, 54);
     for(let data of array){
        document.writeln(data);
        
     }
     document.writeln("<br/>********<br/>");
 
     array.unshift(11, 53);
     for(let data of array){
        document.writeln(data);
     }
     document.writeln("<br/>********<br/>");
 
     array.pop();
     for(let data of array){
        document.writeln(data);
     }
     document.writeln("<br/>********<br/>");
 
     array.shift();
     for(let data of array){
        document.writeln(data);
     }
     document.writeln("<br/>********<br/>");
 
     delete array[0];
     delete array[1];
     for(let data of array){
        document.writeln(data);
     }

    }
  
// arrayMethod()

const arrayMethod2 = () => {
 let array = arrayDataSet();
 for(let data of array){
     document.writeln(data);
 }
 document.writeln("<br/>********<br/>");
array.sort();
for(let data of array){
    document.writeln(data);

}
document.writeln("<br/>********<br/>");
array.reverse();
for(let data of array){
    document.writeln(data);

}
document.writeln("<br/>********<br/>");
array.sort().reverse().forEach((response) => {
    document.writeln(response);
});
}
// arrayMethod2();

   // splice, slice
   const arrayMethod3 = () => {
    let array = arrayDataSet();
    let cloneArray=array;
    cloneArray.forEach((response) => {
        document.writeln(response);
    });
    document.writeln("<br/>********<br/>");

    // Splice(çıkarma)
    // 3: başlangıç indis
    // 2: kaç eleman silinecek
    cloneArray.splice(3,2)
    cloneArray.forEach((response) => {
        document.writeln(response);
    });
    document.writeln("<br/>********<br/>");

    // Splice(ekleme)
    // 1: başlangıç indis
    // 0: eleman çıkarma
    // 44,55 eklenecek veriler
    cloneArray.splice(1,0,44,55)
    cloneArray.forEach((response) => {
        document.writeln(response);
    });

    document.writeln("<br/>********<br/>");

    // SLICE (dizilerden alt diziler oluştur)
   let cloneArray2=array;
   cloneArray2.slice(1,3).forEach((response) => {
        document.writeln(response);
    });
    document.writeln("<br/>********<br/>");
    cloneArray2.forEach((response) => {
        document.writeln(response);
    })
}
    // arrayMethod3();

    // Map, filter, forEach
    const arrayMethod4 = () => {
        let array = arrayDataSet();
        let cloneArray=array;
        cloneArray.forEach((response) => {
            document.writeln(response);
            });
            document.writeln("<br/>********<br/>");
            let filterYttNumbers = cloneArray.filter((response) => {
                return response>4;
            }
            );
            filterYttNumbers.forEach((response) => {
                document.writeln(response);
            });
            document.writeln("<br/>********<br/>");
            let mapYttNumbers = cloneArray.map((response) => {
                return response*2;
            }
            );
            mapYttNumbers.forEach((response) => {
                document.writeln(response);
            });
            document.writeln("<br/>********<br/>");
            cloneArray.forEach((response) => {
                document.writeln(response);
            });


    }
    // arrayMethod4()

// multiline
const data1= () => {
    let multilineYTT = `Merhaba
    YTT
    JS`;
    console.log(multilineYTT);
    // Interpolation
    let name="YTT";
    let age=24;
    let multilineYTT2 = `Merhaba ${name} ${age}`;
    console.log(multilineYTT2);
    // HTML tamplate
    let multilineYTT3 = "<ul>Merhabalar</ul> ";
    console.log(multilineYTT3);
}
// data1();

// Object
const data2 = () => {
    const YttFrontend = {
        name: "YTT",
        age: 24,
        city: "Istanbul",
        isLogin: true,
        start: function(){
            let data= `${this.name} ${this.age} ${this.city}`;
             console.log(data);
        }
    };
    console.log(YttFrontend);
    console.log(YttFrontend.name);
    console.log(YttFrontend.age);
    console.log(YttFrontend.city.toUpperCase());
    if(YttFrontend.isLogin)
        console.log("YTT Frontend Giriş Yaptı");
    else
        console.log("YTT Frontend Giriş Yapmadı");
    YttFrontend.start();
    YttFrontend["start"]();
    YttFrontend.frontend = {
        name: "YTT",
        age: 24,
    }
    console.log(YttFrontend.frontend);
    console.log(YttFrontend.frontend.name);
}
    // data2();

    // Stringfy
const data3 = () => {
    const YttFrontend = {
        name: "YTT",
        age: 24,
        city: "Istanbul",
        isLogin: true,
    };
    // stringe çevirdim
    let jsonString=JSON.stringify(YttFrontend);
    // jsonString=jsonString.toUpperCase();
      console.log(jsonString);

    // Parse
    let ytt = JSON.parse(jsonString);
    console.log(ytt);
    console.log(ytt.name);
    console.log(ytt.age);
    console.log(ytt.city);
}
// data3()

//Call
const callYtt = () => {

    function yttFunction(data){
        console.log("call " + data + " " + this.name);
    }
    let yttObj = {
        name: "YTT"
    }
    yttFunction.call(yttObj, "YTT");
}
// callYtt()

//Apply
const applyYtt = () => {

    function yttFunction(data){
        console.log("Apply " + data + " " + this.name);
    }
    let yttObj = {
        name: "YTT"
    }
    yttFunction.apply(yttObj, ["YTT dizi"]);
}
// applyYtt()

//Bind
const bindYtt = () => {
    function yttFunction(data){
        console.log("Bind " + data + " " + this.name);
    }
    let yttObj = {
        name: "YTT"
    }
    let yttBind = yttFunction.bind(yttObj);
    yttBind("YTT bind");
}
// bindYtt()

// Event
let yttoOnClick = () => {
    alert("1 kere tıkladınız")
}
let yttDblClick = () => {
    alert("2 kere tıkladınız")
    console.log("YTT DblClick");
    }
let onmousewheelClick = () => {
    alert("Mouse Wheel");
}
let onkeydownClick = () => {
    alert("Key Down");
    }
let onkeyupClick = () => {
    alert("Key Up");
    }

// Add Event Listener
let addEventListenerYtt = () => {
    console.log("YTT Add Event Listener");

    let buttonId=document.getElementById("addEventYtt");
    buttonId.addEventListener("mouseleave", yttoOnClick);
}
// addEventListenerYtt()

// Local storage
let localStorageYtt = () => {
    console.log("Local Storage");

        let dataObject = {
            data1: "YT",
            data2: "T",
        }
    //SET
    localStorage.setItem("name", dataObject.data1);
    localStorage.setItem("surname", dataObject.data2);

    // GET
    const name=localStorage.getItem("name");
    console.log(name);

    // DELETE
    localStorage.removeItem("name");

    // ALL DELETE
    localStorage.clear();

}
// localStorageYtt()

// DOM
let yttDom = () => {
    console.log("DOM");
    let heading, paragraf1, paragraf2, button;
    let query1, query2;

    // Heading
    heading=document.getElementById("ytt_h1");
    heading.textContent="YTT Heading ID";

    // Paragraf
    paragraf1=document.getElementsByClassName("ytt_parag")[0];
    paragraf1.innerHTML="<b><mark> Paragraf Class </mark></b>değiştir.";

    paragraf2=document.getElementsByName("ytt_parag2")[0];
    paragraf2.innerText="Paragraf Name değiştir.";

    paragraf2=document.getElementsByTagName("p")[2];
    paragraf2.innerText="Paragraf Tag Name değiştir.";
    paragraf2.style.color="red";
    paragraf2.style.fontSize="20px";
    paragraf2.style.fontFamily="Arial";
    paragraf2.style.textAlign="center";
    paragraf2.style.textDecoration="underline";

    // querySelector
    query1=document.querySelector("#querySelector1");
    query1.innerText="Query Selector ID";

    query2=document.querySelector(".querySelector2");
    query2.innerText="Query Selector Class";
}
 yttDom()