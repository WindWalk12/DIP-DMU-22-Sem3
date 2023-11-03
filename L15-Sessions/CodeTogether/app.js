const express = require('express');
const pug = require('pug');
const session = require('express-session')

const app = express();

port = "1234";

// Functions


// View engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views')

// Middle ware
app.use(express.static(__dirname + '/assets'));
app.use(session({
    secret: 'SoMe woRd',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
  }));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

let checkSecPages = (req, res, next) => {
    let secPages = '/secret';
    if (req.url === secPages) {
        if (!req.session.isLoggedIn) {
            console.log('Trying to access secret page without login');
            res.redirect('/');
        } else {
            next();
        }
    } else {
        next();
    }
}

app.use(checkSecPages);

// Routes get, put, post, delete
app.get('/', (req, res) => {
    let isLoggedIn = false;
    if (req.session.isLoggedIn) {
        isLoggedIn = true;
    }
    res.render('main', {knownUser: isLoggedIn});
})

app.get('/secret', (req, res) => {
    res.render('secret', {knownUser: req.session.isLoggedIn, user: req.session.username});
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if (login(username, password)) {
        req.session.isLoggedIn = true;
        req.session.username = username;
    }
    res.redirect('/');
})

// Start server
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

let login = (user, pass) => {
    if (user == 'gert' && pass == '123') {
        return true
    }
    return false
}