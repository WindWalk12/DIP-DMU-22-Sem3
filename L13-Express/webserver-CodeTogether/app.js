const express = require('express')
const morgan = require('morgan')
const app = express()

port = "1234";

app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log("Blob");
    next()
})

app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
})



app.listen(port, () => {
    console.log(`Running on port ${port}`);
})