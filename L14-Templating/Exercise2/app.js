const express = require('express');
const pug = require('pug');
const randomUserUrl = 'https://randomuser.me/api/?nat=dk&results=100';

const app = express();

port = "1234";

// Functions
let get = async (url) => {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

// View engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views')

// Middle ware
app.use(express.static(__dirname + '/assets'));

// Routes get, put, post, delete
app.get('/', async (req, res) => {
    let rus = await get(randomUserUrl);
    let randomUsers = []
    rus.results.forEach(ru => {
        randomUsers.push({gender: ru.gender, name: ru.name.first + " " + ru.name.last, country: ru.location.country, picture: ru.picture.large, age: ru.dob.age});
    });
    res.render('main', {randomUsers: randomUsers})
})

// Start server
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})