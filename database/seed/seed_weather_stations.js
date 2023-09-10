require('dotenv').config()
const db = require('../index')
const fs = require('fs')

const data = fs.readFileSync('./database/seed/weather_stations.csv', 'utf8')

data
    .split('\r\n')
    .slice(1)
    .map(line => line.split(','))
    .forEach(station => {
        const sql = `
                        INSERT INTO stations
                        (id, ws_name, site, portfolio, state, latitude, longitude)
                        VALUES
                        ('${station[0]}','${station[1]}', '${station[2]}', '${station[3]}', '${station[4]}', '${station[5]}', '${station[6]}')
                    `
        db.query(sql).then(() => console.log('row inserted'))
    })