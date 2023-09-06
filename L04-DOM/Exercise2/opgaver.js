// Tilføj kode for opgave 4.1 - 4.5 her!

// Exercise 1
document.querySelectorAll('p').forEach(e => {
    e.className = 'red';
});

// Exercise 2
document.querySelectorAll('h1+*+*').forEach(e => {
    e.style.color = 'brown';
});