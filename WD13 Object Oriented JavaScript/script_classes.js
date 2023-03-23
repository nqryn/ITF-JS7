/**
 * 
 */

class Person {

    // in constructor adaugam toate atributele necesare
    constructor(firstName, lastName) {
        this.prenume = firstName;
        this.nume = lastName;
    }

    // dupa constructor, avem doar metode (functii)
    sayHello() {
        console.log(`Hello, I am ${this.prenume} ${this.nume}`);
    }

    sayBye() {
        console.log(`Bye, I was ${this.prenume} ${this.nume}`);
    }
}

const p = new Person("Adela", "Neacsu");
console.log(p.prenume, p.nume);
p.sayHello();
p.sayBye();


class Trainer extends Person {
    teach() {
        console.log("Teaching about Javascript...");
    }
}

const t = new Trainer("Maria", "Popescu");
t.sayHello();
t.teach();