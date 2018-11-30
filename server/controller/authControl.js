const express = require('express');
const curriculum = require('../model/curriculum');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secretRegister } = require('../config/auth');

router.post('/register', async (req, res) =>{
    const { cpf } = req.body;

    try {
    if(await curriculum.findOne({ cpf }))
        return res.status(200).send({error: "CPF já cadastrado"});

        // forEach()

        req.body.key = Math.random().toString(36).slice(-10);
        const { key } = req.body;

        if(await curriculum.findOne({ key }))
            return res.status(200).send({error: "Tente novamente!"});

        const Curriculum = await curriculum.create(req.body);

        const token = jwt.sign({ id: Curriculum.id }, secretRegister, {
            expiresIn: 3600,
        });

        Curriculum.password = undefined; //Para não mostrar o valor quando voltar.

        return res.status(200).send({ Curriculum, token })
    } catch (err) {
        console.log(err);
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