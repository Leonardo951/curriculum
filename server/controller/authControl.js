const express = require('express');

const curriculum = require('../model/curriculum');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secret } = require('../config/auth');

router.post('/register', async (req, res) =>{
    const { cpf } = req.body.data;

    const token = jwt.sign({ id: curriculum.id }, secret, {
        expiresIn: 86400,
    });

    try {
    if(await curriculum.findOne({ cpf }))
        return res.status(400).send({error: "cpf já cadastrado"});

        req.body.data.key = Math.random().toString(36).slice(-10);
        const { key } = req.body.data;

        if(await curriculum.findOne({ key }))
            return res.status(400).send({error: "Tente novamente!"});

        const Curriculum = await curriculum.create(req.body.data);

        Curriculum.password = undefined; //para não mostrar o valor quando voltar.

        return res.status(200).send({ Curriculum, token })
    } catch (err) {
        return res.status(400).send({ error: 'Failed registration: '+err })
    }
});

router.post('/authenticate', async (req, res) =>{
   const { mail, password } = req.body;
   const user = await curriculum.findOne({ mail }).select('+password');

   if(!user)
       return res.status(400).send({ error: 'User not found' });

   if(!await bcrypt.compare(password, user.password))
       return res.status(400).send({error: 'Invalid password'});

   user.password = undefined;

   const token = jwt.sign({ id: user.id }, secret, {
       expiresIn: 86400,
    });

   res.send({ user, token });

});

module.exports = app => app.use('/auth', router);