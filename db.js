const { Pool } = require("pg")

const pool = new Pool({
    host: "postgres",
    port: 5431,
    user: "user123",
    password: "pass123",
    database: "postgres"
})

module.exports = pool