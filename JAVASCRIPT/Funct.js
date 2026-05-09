// function name(request) {
//     if (request === 'Odd') {
//         return function(n) {
//             console.log(n % 2 !== 0); // true if odd
//         };
//     } else if (request === 'Even') {
//         return function(n) {
//             console.log(n % 2 === 0); // true if even
//         };
//     } else {
//         console.log("Wrong Request");
//     }
// }

// // Example usage:
// let checkOdd = name('Odd');
// checkOdd(5); // true

// let checkEven = name('Even');
// checkEven(5); // false

// const Class =  {
//   age :9,
//   ade :8,
//   sum() {
//     let s = this.age+this.ade;
//     console.log(`My Sum is ${s}`);
//   }
// }
// Class.sum(); 

//Arrow function
// const sum = (a , b) =>
// {
//   console.log(a+b);
// }
// sum(12,6);

//Array function
// ForEach
// let arr = [1,2,3,4];
// arr.forEach(function(el) { console.log(el)});

// Use map
// let double = arr.map((ele) => {return ele *2});


//Use Filter
// let filteer = arr.filter((ele) => {return ele % 2 == 0});

//Use Every  -> its return like And Operator

// let Ever = arr.every((ele) => {return ele % 2 == 0});

//Use Each  -> returns like or operator
// let Eacc = arr.some((ele) => {return ele % 2 == 0});

//Use reduce 
// let Ever = arr.reduce((res , ele ) => {return (res + ele)});
// console.log(Ever);

//question

// let arr = [3, 6, 4, 7, 3, 82, 6];

// let find = arr.reduce((max, ele) => {
//   if (ele > max) {
//     return ele;
//   } else { return max; }
// });
// console.log(find);

//Question 2 -> Cheak if all number in our array in multiply 10 or not.

// let arr = [4,6,4,6,7,3];
// let res = arr.every((ele)=> {
//   return  ele % 10 ==0;
// });
// console.log(res);

// Question no 3 -> Cheak a function to find the min number in an array

// let arr = [4,6,3];
// let find = arr.reduce((min , ele) => {
//   if(ele > min) {
//     return min;
//   }else {
//     return ele;
//   }
// });
// console.log(find);

// Destructing
// let names = ['Md Meraj','Heli', ' Navratri'];
// let [hellor,...oht] = names;
// console.log(hellor,...oht);

// let student = {
//   name : "Md Meraj ",
//   roll: 21,
//   sub:["Math","Code"," java","python"]
// };
// let user = student.sub;
// console.log(user);


//Use DOM

// let s = document.createElement("p");
// s.innerText = "Hello i am red !";
// document.querySelector("body").append(s);

// s.classList.add("red");

// let h3 = document.createElement("h3");
// h3.innerText = " Hi I'm h3 respect me !";
// document.querySelector('body').append(h3);
// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");

// h1.innerText = "I'm in your laptop ";
// p.innerText = "Me too !";

// div.append(h1);
// div.append(p);
// document.querySelector('body').append(div);
// div.classList.add("box");

// const a = 5 & 1;
// console.log(a);

// let n1,n2
// const res = (n1=2,n2=4,n1+n2);
// console.log(res)

let a =4;
console.log(++a);
console.log(a--)