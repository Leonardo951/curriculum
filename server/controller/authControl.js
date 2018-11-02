const express = require('express');

const curriculum = require('../model/curriculum');

const router = express.Router();

router.post('/register', async (req, res) =>{
    const { cpf } = req.body;

    try {
    if(await curriculum.findOne({ cpf }))
        return res.status(400).send({error: "cpf já cadastrado"});

        const Curriculum = await curriculum.create(req.body);

        Curriculum.password = undefined; //para não mostrar o valor quando voltar.

        return res.send({ Curriculum })
    } catch (err) {
        return res.status(400).send({ error: 'Failed registration: '+err })
    }
});

module.exports = app => app.use('/auth', router);