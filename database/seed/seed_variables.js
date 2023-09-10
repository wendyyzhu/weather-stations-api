require('dotenv').config()
const db = require('../index')
const fs = require('fs')

const data = fs.readFileSync('./database/seed/variables.csv', 'utf8')

console.log(data
    .split('\r\n')
    .slice(1)
    .map(line => line.slice(0,-1))
    .map(line => line.split(','))
    .forEach(variable => {
        const sql = `
                        INSERT INTO variables
                        (var_id, id, name, unit, long_name)
                        VALUES
                        ('${variable[0]}','${variable[1]}', '${variable[2]}', '${variable[3]}', '${variable[4]}')
                    `
        db.query(sql).then(() => console.log('row inserted'))
    })
)