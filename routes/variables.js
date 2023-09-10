const express = require('express')
const router = express.Router()
const db = require("../database")

router.get('/all', (req, res) => {
    const sql = `SELECT * FROM variables ORDER BY var_id`
    db
        .query(sql)
        .then(res => res.rows)
        .then(variables => res.json(variables))
})

router.get('/:id', (req, res) => {
    const sql = `SELECT * FROM variables WHERE id = $1 ORDER BY var_id`
    db
        .query(sql, [req.params.id])
        .then(res => res.rows)
        .then(variables => res.json(variables))
})

module.exports = router