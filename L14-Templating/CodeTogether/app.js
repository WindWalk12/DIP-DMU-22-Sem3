const express = require('express');
const pug = require('pug');

const app = express();

port = "1234";

// View engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views')

// Middleware
app.use(express.static(__dirname + '/assets'));

// Routes get, put, post, delete
app.get('/', (req, res) => {
    let cats = [
        {name: "Gandalf", image: "cat1.jpg"},
        {name: "Jante", image: "cat2.jpg"},
        {name: "Garfield", image: "cat3.jpg"},
        {name: "Handalf", image: "cat4.jpg"}
    ];
    res.render('main', {name: 'Mads', cats: cats});
})

app.get('/katte', (req, res) => {
    res.send('Damn!');
})

app.get('/katte/:name', (req, res) => {
    res.render('simple', {name: req.params.name});
})


// Start server
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})