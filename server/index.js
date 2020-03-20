const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios')
// const port = 3000;
// const con = require('../database/index.js');
require('dotenv').config();

app.use(express.static(path.join(process.cwd(), '/client/public')));

// Sample route
// app.get('https://pokeapi.co/api/v2/generation/1/limit=10', (req, res) => {
//     //res.send(path.join(process.cwd(), '/client/public'));
//     res.send('test1')
// });
app.get('/pokelist', (req, res) => {
    res.send()
})

app.listen(process.env.PORT || port, () => {
    console.log(`Server is Listening`);
});