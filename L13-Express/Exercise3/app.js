const express = require('express');
const app = express();

const port = "1234";

let messages = [];

app.get('/beskeder', (req, res) => {
    if (messages.length !== 0) {
        res.send(messages);
    } else {
        res.send("No messages to display")
    }
    
})

app.get('/beskeder/:rum', (req, res) => {
    let messagesFromRoom = [];
    messages.forEach((msg) => {
        if(msg.rum == req.params.rum) {
            messagesFromRoom.push(msg);
        }
    })
    if (messagesFromRoom.length !== 0) {
        res.send(messagesFromRoom);
    } else {
        res.send(`No messages to display from ${req.params.rum}`)
    }
})

app.get('/rum', (req, res) => {
    let rooms = [];
    messages.forEach((msg) => {
        rooms.push(msg.rum);
    })
    if (rooms.length !== 0) {
        const uniqueRooms = [...new Set(rooms)];
        res.send(uniqueRooms);
    } else {
        res.send(`No rooms to display`)
    }
})

let msgNr = 0;
app.post('/besked', (req, res) => {
    const {name, room, text} = req.query;
    messages.push({id: ++msgNr, navn: name, rum: room, tekst: text});
    res.send("Msg saved");
})

app.delete('/besked/:nr', (req, res) => {
    const nr = req.params.nr;
    messages.splice(messages.findIndex(msg =>  msg.id == nr), 1);
    res.send("Msg deleted");
})

app.listen(port, () => {
    console.log(`Listens on ${port}`);
});