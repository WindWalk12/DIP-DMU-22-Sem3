let persons = [{name : "Anders", email : "wufhweuf@uwebw.dk", number : 85738264}];

persons.push({name : "Bo", email : "hwff@uwf.dk", number : 85338264});
persons.push({name : "Lars", email : "iwfnfw@iwhf.dk", number : 85333664});

console.log(persons[2]);

persons[2] = {name : "Hanne", email : "uwwjg@ad.dk", number : 18562897};

console.log(persons[2]);

persons.splice(2, 1);

console.log();

for (const person of persons) {
    console.log(person);
}