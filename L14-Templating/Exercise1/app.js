const express = require('express');
const pug = require('pug');
const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

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
app.get('/', async (req, res) => {
    let eqs = await get(earthquakeUrl);
    eqs.features.sort((eq1, eq2) => {return eq2.properties.mag - eq1.properties.mag});
    let earthquakes = []
    eqs.features.forEach(eq => {
        if (eq.properties.mag >= 5)
        earthquakes.push({mag: eq.properties.mag, place: eq.properties.place, time: new Date(eq.properties.time).toLocaleString()});
    });
    res.render('main', {earthquakes: earthquakes})
})

// Start server
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})