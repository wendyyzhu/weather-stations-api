require('dotenv').config();
const express = require('express');
const app = express(); 
const port = process.env.PORT || 4000;
const db = require('./database/index');

app.get('/', (req, res) => {
    res.send('Weather stations API')
})

app.get('/api/stations/all', (req, res) => {
    const sql = `SELECT * FROM stations ORDER BY id;`
    db
        .query(sql)
        .then(res => res.rows)
        .then(stations => res.json(stations))
})

app.get('/api/stations/:id', (req, res) => {
    const sql = `SELECT * FROM stations  WHERE id = $1;`
    db
        .query(sql, [req.params.id])
        .then(res => res.rows)
        .then(station => res.json(station))
})

app.get('/api/variables/all', (req, res) => {
    const sql = `SELECT * FROM variables ORDER BY var_id`
    db
        .query(sql)
        .then(res => res.rows)
        .then(variables => res.json(variables))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})