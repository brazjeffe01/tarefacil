const express = require('express')
const pool = require('./db.js')
const port = 3000

const app = express()
app.use(express.json())

app.get('/config', async (req, res) => {
    try {
        await pool.query('CREATE TABLE usuarios (id SERIAL PRIMERY KEY, user VARCHAR(10) NOT NULL, pass VARCHAR(20) NOT NULL)')
        res.status(200).send({message: "Banco de dados criado com sucesso!"})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.post('/', async (req, res) => {
    const { newUser, newPass } = req.body
    try {
        await pool.query('INSERT INTO usuarios (user, pass) VALUES ($1, $2)', [ newUser, newPass ])
        res.status(200).send({message: "Usuário criado com sucesso!"})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.listen(port, () => console.log(`O servidor foi iniciado na porta: ${port}`))