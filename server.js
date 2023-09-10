require('dotenv').config();
const express = require('express');
const app = express(); 
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Weather stations API')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})