const express = require('express');
const bodyParser = require('body-parser')
const mongo = require('express-mongo-db')
const cors = require('cors')

app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(mongo('mongodb://localhost/cadastro'));

app.get('/usuarios', (req, res) => {
    req.db.collection('usuarios').find().toArray((erro, dados) => {
        if (!erro) {
            return res.send({ usuarios: dados });
        }
        return res.status(500).send({ erro: "Erro ao consultar o banco de dados. Verifique a sua conexão com a Internet" });
    })
})

app.post('/usuario/novo', (req, res) => {

    req.db.collection('usuarios').insert(req.body, erro => {
        if (!erro) {
            return res.send({ mensagem: "Usuário cadastrado" });
        }
        return res.status(500).send({ erro: "Problema ao consultar o banco de dados" });
    });
});

app.listen(5000, () => {
    console.log("Serviço de cadastro está sendo executado");
});

