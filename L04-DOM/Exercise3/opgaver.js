// Tilføj kode for opgave 4.1 - 4.5 her!

// Exercise 1
document.querySelectorAll('p').forEach(e => {
    e.className = 'red';
});

// Exercise 2
document.querySelectorAll('h1+*+*').forEach(e => {
    e.style.color = 'brown';
});

// Exercise 3
let ul = document.querySelector('ul');
for (let i = 0; i < ul.children.length; i++) {
    if (i % 2 == 0) {
        ul.children[i].style.backgroundColor = 'lightgrey';
    }
}