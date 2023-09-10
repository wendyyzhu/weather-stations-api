const express = require('express')
const router = express.Router()
const db = require("../database")

router.get('/1', (req, res) => {
    const sql = `SELECT * FROM data_1 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

router.get('/2', (req, res) => {
    const sql = `SELECT * FROM data_2 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

router.get('/3', (req, res) => {
    const sql = `SELECT * FROM data_3 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

router.get('/4', (req, res) => {
    const sql = `SELECT * FROM data_4 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

router.get('/5', (req, res) => {
    const sql = `SELECT * FROM data_5 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

router.get('/6', (req, res) => {
    const sql = `SELECT * FROM data_6 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

router.get('/7', (req, res) => {
    const sql = `SELECT * FROM data_7 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

router.get('/8', (req, res) => {
    const sql = `SELECT * FROM data_8 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

router.get('/9', (req, res) => {
    const sql = `SELECT * FROM data_9 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

router.get('/10', (req, res) => {
    const sql = `SELECT * FROM data_10 ORDER BY timestamp DESC`
    db
        .query(sql)
        .then(res => res.rows)
        .then(data => res.json(data))
})

module.exports = router