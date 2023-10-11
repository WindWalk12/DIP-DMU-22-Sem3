const express = require('express');
const app = express();

const port = "1234";

let beskeder = [];

app.get('/beskeder', (req, res) => {
    res.send("Test");
})

app.get('/beskeder/:rum', (req, res) => {
    //res.send();
})

app.get('/rum', (req, res) => {
    //res.send();
})

app.use(('/besked'), express.json())

app.post('/besked', async (req, res) => {
    const {name, room, text} = req.body;
    beskeder.push({"Navn": name, "Rum": room, "Tekst": text});
    res.send("Msg saved");
})

app.delete('/besked/:nr', (req, res) => {

})

app.listen(port, () => {
    console.log(`Listens on ${port}`);
});