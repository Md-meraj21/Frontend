// let a =10;
// let b = `My price is : ${a} Doler `;
// console.log(b);  //template literals

// alert("Somthing is Wrong please try again !");
// prompt("What are you doing here!");
// console.log("jghj");
// //when we print error
// console.error("This is find error");


// let fn = prompt("Enter your first name :");
// let ln = prompt("Enter your last name :");
// alert("Welcome "+fn+" "+ ln); // to show your name 

// fn.indexOf("Md");


// let month = ["july","june","march","august"];
// console.log(month.shift());
// console.log(month.unshift("january"));

// let Game = "FreeFire";
// let guess = prompt("Enter your guess");
// while ((guess != Game )&&(guess != "exit")) {
//     guess = prompt("Wrong Guess");
// }

// TODO LIST
// let todo = [];
// let req = prompt("Enter your todo : ");

// while (true) {
//     if (req == 'exit') {
//         console.log("quiting App");
//         break;
//     }
//     console.log("--------------------");
//     if (req == "list") {
//         for (let index = 0; index < array.length; index++) {
//             console.log(index,todo[index]);
//         }
//         console.log("----------------");
//     }
//     else if (req == "add") {
//         todo.push(prompt("Please ENter task what you want to add "));
//         console.log("Task Added");
//     }
//     else if(req == "delete") {
//         todo.splice(prompt("Please Enter the task index"), 1);
//         console.log("Task deleted");
//     }
//     else {
//         console.log("Wrong Request");
//     }
//     req = prompt("Please Enter your request");
// }

// console.log(Math.floor(Math.random() *10)); // random me 0.somthing print karta hai usko expand karne ke lia * kiya jata hai

// let random = Math.floor(Math.random()* prompt("Enter your max number")) +1;
// let guess = prompt("Enter your guessing number")

// while (true) {
//     if (random == guess) {
//         console.log("Congratulations !");
//         break;
//     }
//     else if (guess == "Exit") {
//         console.log("Thank you bro !");
//         break;
//     }
//     else {
//         guess = prompt("Please try your best !")
//     }
// }

// let namee = function() {
//     console.log("Hello bhai")
// }
// namee();

function hello(func , n) {
    for (let i = 0; i < n; i++) {
        func();
        
    }
}
let namee = function() {
    console.log("Hello bhai")
}
hello(namee,10);