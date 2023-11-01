const express = require('express');
const pug = require('pug');

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
app.get('/:country/:amount', async (req, res) => {
    const allowedCountries = ['gb', 'dk', 'fr', 'de'];
    if(allowedCountries.indexOf(req.params.country) > -1 && req.params.amount >= 10 && req.params.amount <= 100) {
        const randomUserUrl = `https://randomuser.me/api/?nat=${req.params.country}&results=${req.params.amount}`;
        let rus = await get(randomUserUrl);
        let randomUsers = []
        rus.results.forEach(ru => {
            randomUsers.push({gender: ru.gender, name: ru.name.first + " " + ru.name.last, country: ru.location.country, picture: ru.picture.large, age: ru.dob.age});
        });
        res.render('main', {randomUsers: randomUsers})
    } else {
        res.send("There is an issue with the params");
    }
})

// Start server
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})