persons = [{
    name: "Jonas",
    age: 24,
    phoneNumber: 59284736
},
{
    name: "Marie",
    age: 26,
    phoneNumber: 72649272
},
{
    name: "Emily",
    age: 23,
    phoneNumber: 41849376
},
{
    name: "Emil",
    age: 35,
    phoneNumber: 59278473
}];

// Exercise1
console.log("Exercise1");
console.log(persons.find(p => p.phoneNumber === 59278473));
console.log("\n");

// Exercise2
console.log("Exercise2");
console.log(persons.reduce((p1, p2) => p1.age < p2.age ? p1 : p2));
console.log("\n");

// Exercise3
console.log("Exercise3");
persons.forEach((element, i) => {
    element.id = ++i;
});
console.log(persons);
console.log("\n");

// Exercise4
console.log("Exercise4");
let nameString = '';
persons.sort((p1, p2) => p1.name < p2.name ? -1 : 1).forEach((element, id, array) => {id != array.length - 1 ? nameString += element.name + "; " : nameString += element.name});
console.log(nameString);
console.log("\n");

// Exercise5
console.log("Exercise5");
let ageUnder30 = [];
persons.forEach(element => element.age < 30 ? ageUnder30.push({name: element.name, phoneNumber: element.phoneNumber}) : false);
console.log(ageUnder30);
console.log("\n");