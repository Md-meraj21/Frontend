// function Callback(name,age) {
//     const person = {
//         name:name,
//         age:age,
//         talk() {
//             console.log(`Hi my name is ${name}`);
//         }
//     }
//     return person;
// }

// let p1 = Callback("Meraj",12);
// p1.talk();

//use Constructor
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// let p1 = new Person("Md Meraj",21);
// console.log(p1.name);

//Inheritance
class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hey buddy, i am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,roll) {
        super(name,age); //parent class constuctor is being called.
        this.mark = this.mark;
    }
}

class Teacher extends Person{
    constructor(name,age,sub) {
        super(name,age);
        this.sub = sub;
    }
}

let p1 = new Teacher("Meraj",21,"Urdu");
for(let a in p1) {
    console.log(a);
}