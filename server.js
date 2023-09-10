require('dotenv').config();
const express = require('express');
const app = express(); 
const port = process.env.PORT || 4000;
const db = require('./database/index');
const stationsRouter = require('./routes/stations')
const variablesRouter = require('./routes/variables')

app.get('/', (req, res) => {
    res.send('Weather stations API')
})

app.use('/api/stations', stationsRouter)

app.use('/api/variables', variablesRouter)

app.get('/api/data/1', (req, res) => {
    const sql = `SELECT * FROM data_1 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data/2', (req, res) => {
    const sql = `SELECT * FROM data_2 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data/3', (req, res) => {
    const sql = `SELECT * FROM data_3 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data/4', (req, res) => {
    const sql = `SELECT * FROM data_4 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data/5', (req, res) => {
    const sql = `SELECT * FROM data_5 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data/6', (req, res) => {
    const sql = `SELECT * FROM data_6 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data/7', (req, res) => {
    const sql = `SELECT * FROM data_7 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data/8', (req, res) => {
    const sql = `SELECT * FROM data_8 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data/9', (req, res) => {
    const sql = `SELECT * FROM data_9 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data/10', (req, res) => {
    const sql = `SELECT * FROM data_10 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})