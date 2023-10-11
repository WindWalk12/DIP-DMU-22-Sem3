const express = require('express')
const app = express()

port = "1234";

app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})