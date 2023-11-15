const express = require('express');
const pug = require('pug');

const app = express();

port = "1234";

// Functions


// View engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views')

// Middleware
app.use(express.static(__dirname + '/assets'));

app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Routes get, put, post, delete
app.get('/', (req, res) => {
 
    res.render('main');
})

// Start server
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})