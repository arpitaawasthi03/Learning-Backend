// Factory functions

// function personMaker(name,age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`hii i m batooni ${this.name}`)
//         }
//     }
//     return person;
// }

// let p1 = personMaker("pari",21);


// Constructors

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = ()=>{
//     console.log(`hii i m batooni ${this.name}`)
// }

// let p1 = new Person("pari",21);
// let p2 = new Person("gauri",23);

// Classes

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hii i m batooni ${this.name}`)
    }
}

let p1 = new Person("pari",21);
let p2 = new Person("gauri",23);