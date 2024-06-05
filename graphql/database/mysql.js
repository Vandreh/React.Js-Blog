require('dotenv').config()

let config = {
    client: 'mysql2',
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DB,
        password: process.env.MYSQL_PASS,
        port: process.env.MYSQL_PORT,
        multipleStatements: true
    }
}

module.exports = require('knex')(config)
