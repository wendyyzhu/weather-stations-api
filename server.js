require('dotenv').config();
const express = require('express');
const app = express(); 
const port = process.env.PORT || 4000;
const db = require('./database/index');
const stationsRouter = require('./routes/stations')

app.get('/', (req, res) => {
    res.send('Weather stations API')
})

app.use('/api/stations', stationsRouter)

app.get('/api/variables/all', (req, res) => {
    const sql = `SELECT * FROM variables ORDER BY var_id`
    db
        .query(sql)
        .then(res => res.rows)
        .then(variables => res.json(variables))
})

app.get('/api/variables/:id', (req, res) => {
    const sql = `SELECT * FROM variables WHERE id = $1 ORDER BY var_id`
    db
        .query(sql, [req.params.id])
        .then(res => res.rows)
        .then(variables => res.json(variables))
})

app.get('/api/data_1', (req, res) => {
    const sql = `SELECT * FROM data_1 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data_2', (req, res) => {
    const sql = `SELECT * FROM data_2 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data_3', (req, res) => {
    const sql = `SELECT * FROM data_3 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data_4', (req, res) => {
    const sql = `SELECT * FROM data_4 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data_5', (req, res) => {
    const sql = `SELECT * FROM data_5 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data_6', (req, res) => {
    const sql = `SELECT * FROM data_6 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data_7', (req, res) => {
    const sql = `SELECT * FROM data_7 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data_8', (req, res) => {
    const sql = `SELECT * FROM data_8 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data_9', (req, res) => {
    const sql = `SELECT * FROM data_9 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.get('/api/data_10', (req, res) => {
    const sql = `SELECT * FROM data_10 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})