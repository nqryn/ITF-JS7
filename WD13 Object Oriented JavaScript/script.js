// Object literals = definierea unui obiect JS prin brackets {}

const bob = {
    name: ["Bob", "Smith"],
    age: 32,
};

const john = {
    name: ["John", "Doe"],
    age: 26
};

// La object literals NU avem o matrita, putem pune ce vrem noi in obiect

// this = cuvant cheie injectat de JS in interiorul obiectului nostru => face referire la obiectul curent

const adela = {
    firstName: "Adela",
    lastName: "neacsu",
    birthdate: "1991-06-19",
    sayHello() { console.log(`Hello, I am ${this.firstName} ${this.lastName}!!`) }
};

const george = {
    firstName: "George",
    lastName: "Moldovan",
    birthdate: "1991-06-19",
    sayHello() { console.log(`Hello, I am ${this.firstName} ${this.lastName}!!`) }
};


adela.sayHello();
george.sayHello();

// Conceptul de clase ne ajuta sa cream o matrita (blueprint) prin care toate obiectele noastre
// sa aiba aceleasi atribute (proprietati) si metode (actiuni -> functii)

// In majoritatea limbajelor OOP, o clasa are un constructor
// Constructor = functie speciala care creeaza un obiect cu atributele necesare si il returneaza

// Functia Person se comporta ca si o clasa acum, iar constructorul este implicit
function Person(firstName, lastName, birthdate) {
    // nume si prenume sunt atribute
    this.prenume = firstName;
    this.nume = lastName;
    this.dataNasterii = birthdate;  
    // la fel pot pune si actiuni (metode)
    this.sayHello = () => {
        console.log(`Salut din clasa Person, eu sunt ${this.prenume} ${this.nume}!!`)
    }
}

// Pentru a creea acum un obiect de tipul Person, trebuie sa folosim cuvantul cheie new
andreea = new Person("Andreea", "Smiricov", new Date(1990, 5, 7));
andreea.sayHello();

// Cu ajutorul unei clase, putem creea oricate obiecte dorim foarte simplu; 
// iar acele obiecte vor avea ~mereu aceleasi atribute si metode


// Prototype = toate actiunile care se pot efectua pe o clasa, atat cele proprii,
// cat si cele mostenite de la alte clase se gasesc in prototipul acelei clase

// In Person.prototype vom avea functia sayHello, si constructorul (functia Person)
console.log(Person.prototype);

// Mostenirea - o clasa se poate numi clasa "parinte", adica alte clase o pot mosteni (clase copii)
// si asta inseamna ca clasele copii preiau de la parinte TOATE atributele si metodele

// De exemplu, clasa noastra Person ar putea avea 2 sub-clase Trainer si Student, fiecare avand pe langa
// nume, prenume, sayHello si alte atribute si metode specifice lor


// Toate clasele in JS mostenesc din clasa parinte Object, deci implicit obiectul "andreea"
// a mostenit metoda `toString` de la clasa Object (mai precis  din prototipul acesteia)
console.log(andreea.toString());

// Ca sa adaug o noua functionalitate la clasa mea Person, o adaug in prototip
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.dataNasterii.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970 );
}

// Acum, Person.prototype va contine si metoda calculateAge, iar noi o putem folosi pe obiecte
console.log(Person.prototype);
console.log(andreea.calculateAge());


// Dupa ce am definit clasa noastra constructor, nu mai putem adauga atribute noi decat prin metode
// O metoda de genul acesta, in care adaugam un atribut, se numeste de obicei setter (adica *seteaza* valoarea atributului)
Person.prototype.addCity = function(city) {
    this.oras = city;
}

console.log(Person.prototype);
console.log(`Before: ${JSON.stringify(andreea)}`);
andreea.addCity("Buzau");
console.log(`After: ${JSON.stringify(andreea)}`);


// Pentru a vedea proprietatile unui obiect, putem itera cu for
// Object.hasOwn => o metoda sa vedem daca o anumita proprietate este "proprie" obiectului, sau este de fapt pe prototip
console.log("==========================================");
for (let key in andreea) {
    console.log(key, " => ", Object.hasOwn(andreea, key));
}


// Mostenire => pentru a mosteni prin prototipuri in JS, trebuie sa definim clasele copil, fiecare cu propriul constructor
// Iar apoi sa cream un prototip din parinte

console.log("==========================================");
function Student(firstName, lastName, birthdate, enrolledIn) {
    // nume si prenume sunt atribute
    this.prenume = firstName;
    this.nume = lastName;
    this.dataNasterii = birthdate;  
    this.inrolatIn = enrolledIn;
    this.note = [];
}

// Mostenim prototipul de la parintele Person
Student.prototype = Object.create(Person.prototype);
console.log(Student.prototype);
// Setam constructorul inapoi la Student
Student.prototype.constructor = Student;
console.log(Student.prototype);

const irina = new Student("Irina", "Georgescu", new Date(1990, 2, 2), "Web Dev");
// Acum, obiectul nostru va avea atat atributele setate prin constructorul Student
// cat si metodele mostenite de la parintele Person
console.log(irina.calculateAge());
console.log(irina.inrolatIn);

Student.prototype.addGrade = function(grade) {
    this.note.push(grade);
}

Student.prototype.getAvg = function() {
    const sumNote = this.note.reduce((partialSum, a) => partialSum + a, 0);
    return sumNote / this.note.length;
}