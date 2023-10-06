const express = require('express');

const app = express();

app.listen(1234, () => console.log("Started"));

app.get('/temperature/:where', (req, res) => {
    res.send(`{"temperature": 57, "location": "${req.params.where}"}`);
});

app.get('/humidity', (req, res) => {
    res.send('{"humidity":27}')
});

app.get('/', (req, res) => {
    res.send('Hello')
});

app.use((req, res) => {
    res.status(404).send('Not found');
})