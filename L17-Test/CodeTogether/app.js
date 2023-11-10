import express from "express";
import pug from "pug";
import carsDBFunctions from "./service/carsDBFunctions.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const port = "1234";


// Functions


// View engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views')

// Middleware
app.use(express.static(__dirname + '/assets'));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Routes get, put, post, delete
app.get('/cars', async (req, res) => {
    const cars = await carsDBFunctions.getCars();
    res.render('cars', {cars: cars});
})

app.get('/cars/:carID', async (req, res) => {
    let car = await carsDBFunctions.getCar(req.params.carID);
    res.render('car', {car: car});
})

app.delete('/cars/:carID', async (req, res) => {
    let car = await carsDBFunctions.deleteCar(req.params.carID);
    res.status(204);
    res.end();
})

app.get('/addCar', (req, res) => {
    res.render('addCar');
})

app.post('/addcar', async (req, res) => {
    const {brand, model} = req.body;
    let id = await carsDBFunctions.addCar(brand, model);
    res.redirect('/cars');
})

app.get('/editCar/:carID', async (req, res) => {
    let car = await carsDBFunctions.getCar(req.params.carID);
    res.render('editCar', {car: car});
})

app.put('/editCar/:carID', async (req, res) => {
    const carID = req.params.carID;
    const {brand, model} = req.body;
    const car = {
        brand: brand,
        model: model,
        carID: carID
    }
    await carsDBFunctions.editCar(car);
    res.status(200);
    res.end();
})

// Start server
app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

export default { app }