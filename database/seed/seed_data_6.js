require('dotenv').config()
const db = require('../index')
const fs = require('fs')

const data = fs.readFileSync('./database/seed/data_6.csv', 'utf8')

console.log(data
    .split('\r\n')
    .slice(1)
    .map(line => line.split(','))
    .forEach(measurement => {
        const sql = `
                        INSERT INTO data_6
                        (value1, timestamp)
                        VALUES
                        ('${measurement[0]}','${measurement[1]}')
                    `
        db.query(sql).then(() => console.log('row inserted'))
    })
)