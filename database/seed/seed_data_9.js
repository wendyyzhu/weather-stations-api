require('dotenv').config()
const db = require('../index')
const fs = require('fs')

const data = fs.readFileSync('./database/seed/data_9.csv', 'utf8')

console.log(data
    .split('\r\n')
    .slice(1)
    .map(line => line.split(','))
    .map(line => {
        const [firstElement, secondElement, ...rest] = line
        return [secondElement, firstElement, ...rest]
    })
    .forEach(measurement => {
        const sql = `
                        INSERT INTO data_9
                        (value1, value2, timestamp)
                        VALUES
                        ('${measurement[0]}','${measurement[1]}', '${measurement[2]}')
                    `
        db.query(sql).then(() => console.log('row inserted'))
    })
)