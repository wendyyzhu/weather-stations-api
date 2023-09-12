require('dotenv').config();
const express = require('express');
const app = express(); 
const port = process.env.PORT || 4000;
const stationsRouter = require('./routes/stations')
const variablesRouter = require('./routes/variables')
const dataRouter = require('./routes/data')

app.get('/', (req, res) => {
    res.send('Weather stations API')
})

app.use('/api/stations', stationsRouter)

app.use('/api/variables', variablesRouter)

app.use('/api/data', dataRouter)

app.get('*', (req, res) => {
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})