function Player(firstName, lastName, team, position) {
  this.firstName = firstName
  this.lastName = lastName
  this.team = team
  this.position = position
}

function Henning() {
  this.hed = "Jeg er Henning"
}
let dig = new Henning()

let player1 = new Player("Diego", "Maradona", "Argentina", "Forward")
let player2 = new Player("Alan", "Sherer", "England", "Forward")

Player.prototype.sport = "Football"
console.log(player1.sport)
console.log(player2.sport)


class Person {
  constructor(name) {
    this.name = name
  }

  talk() {
    console.log(`Et eller andet: ${this.name}`)
  }
}

class Student extends Person {
  constructor(name, grade) {
    this.grade = grade
    super(name)
  }
}

// er det samme som

function Persona(name) {
  this.name = name
}

Persona.prototype.talk = function () { console.log(`Et eller andet: ${this.name}`) }

let mig = new Persona("Kaj")


