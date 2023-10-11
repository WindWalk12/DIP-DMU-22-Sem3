const express = require('express');
const app = express();
const fs = require('fs').promises;

const port = "1234";

function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}

app.use(express.static(__dirname + '/filer'));

app.get('/', async (req, res) => {
    let filnavne = await fs.readdir(__dirname + '/filer');
    let html = genererLinks(filnavne);
    res.send(html);
})

app.listen(port, () => {
    console.log(`Listens on ${port}`);
});