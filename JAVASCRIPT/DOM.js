// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     alert("Bas bhai click ho gya !");
// }

// let btns = document.querySelectorAll("button");

// function select() {
//     alert("What are you doing man ?");
// }

// for (btn of btns) {
//     // btn.onclick=select;
//     btn.addEventListener("button",select);
// }

// let h1= document.querySelector("h1");
// function stter(color , delay , nextcolorchange) {
//     setTimeout(()=> {
//         h1.style.color = color;
//     },delay);
//     nextcolorchange();
// }



// stter("blue",1000 , ()=> {
//     stter("pink",2000)
// });


// function savetodb(data) {
//     return new Promise((resolve , reject) => {
//         let internetspeed = Math.floor(Math.random()*10) +1;
//         if (internetspeed > 4 ) {
//             resolve("Success : Data was saved");
//         }
//         else {
//             reject("Failure : Weak Connection");
//         }
//     });
// }

// savetodb("MD-Meraj").then((result)=> {
//     console.log("Promise was resolved - ",result);
// })
// .then((result) => {
//     console.log("promise2 was resolved - ",result);
// })
// .catch ((error)=> {
//     console.log("Promise was rejected - ",error);
// });

// let h1 = document.querySelector("h1");
// function SetColor(color, delay) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("Color Changed !");
//         }, delay);
//     });
// }

// SetColor("red" ,1000).then(()=> {
//     console.log("Red Color was changed");
//     return SetColor("Blue", 1000);
// })
// .then(()=> {
//     console.log("Blue Color is changed");
//     return SetColor("pink",1000);
// })
// .then (()=> {
//     console.log("pink is Changed");
// })

// async function greet() {
//     throw "Some Random Error";
//     return "jahilo";
// }


// function greet() {
//     return new Promise((resolve,reject)=> {
//         setTimeout(() => {
//             console.log(Math.floor(Math.random()*10) +1);
//             resolve();
//         },1000);
//     })
// }

// async function get() {
//     await greet();
//     await greet();
//     await greet();
// }

// let h1 = document.querySelector("h1");
// function Color(color, delay) {
//     return new Promise((resolve, reject) => {
//         h1.style.color = color;
//         console.log(`Changed Color is ${color}`);
//         resolve("Color Changed");
//     }, delay);
// }

// async function Colored() {
//     await Color("blue", 1000);
//     await Color("green", 1000);
//     await Color("yellow", 1000)
// }

// Colored();

console.log("HEllo VS Code ");