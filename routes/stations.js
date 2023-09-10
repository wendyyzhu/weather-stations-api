const express = require('express')
const router = express.Router()
const db = require("../database")

router.get('/all', (req, res) => {
    const sql = `SELECT * FROM stations ORDER BY id;`
    db
        .query(sql)
        .then(res => res.rows)
        .then(stations => res.json(stations))
})

router.get('/:id', (req, res) => {
    const sql = `SELECT * FROM stations  WHERE id = $1;`
    db
        .query(sql, [req.params.id])
        .then(res => res.rows)
        .then(station => res.json(station))
})

module.exports = router