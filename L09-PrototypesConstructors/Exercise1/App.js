class Person {
    constructor(name) {
        this.name = name;
    }
    toString() { return this.name; }
    equals(p) { return this.name === p.name && p.constructor.name === "Person" ? true : false }
    static compare(p1, p2) { return p1.name.localeCompare(p2.name) }
}
class Studerende extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    toString() { return super.toString() + ": " + this.id; };
    equals(s) { return this.name === s.name && this.id === s.id && s.constructor.name === "Studerende" ? true : false }
}



let person = new Person("Emil");
let person2 = new Person("Marie");


let student = new Studerende("Emily", 1);
let student2 = new Studerende("Kim", 2);

console.log(person.equals(person2));
console.log(person.equals(person));
console.log(student.equals(student2));
console.log(student.equals(student));

let persons = [person, person2, student, student2];

console.log(persons);

persons.sort(Person.compare)

console.log(persons);

class Kat {
    constructor(name) { this.name = name; }
    toString() { return 'Kat: ' + this.name; };
}

let kat = new Kat("Ama");

persons.push(kat);
console.log(persons);

persons.sort(Person.compare)
console.log(persons);