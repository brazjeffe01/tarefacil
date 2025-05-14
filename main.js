const pool = require('./db')

async function criarTabela() {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS teste (cod SERIAL PRIMARY KEY, nome VARCHAR(20) NOT NULL)');
    } catch (err) {
        console.log(err)
    }
}

function validaCampos() {
    const fieldUser = document.getElementById('user').value
    const fieldPass = document.getElementById('passwd').value
    const fieldConfirmPass = document.getElementById('confirm-passwd').value

    if(fieldUser.length == 0) {
        window.alert('Campo USUÁRIO não pode estar vazio!')
    } else if(fieldPass.length == 0) {
        window.alert('Campo SENHA não pode estar vazio!')
    } else if(fieldConfirmPass.length == 0) {
        window.alert('Campo CONFIRMAR SENHA não pode estar vazio!')
    } else {
        location.href = "https://www.google.com.br"
    }
}