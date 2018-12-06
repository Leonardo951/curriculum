const express = require('express');
const curriculum = require('../model/curriculum');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secretRegister, secretLogged } = require('../config/auth');

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
   const { mail, pass } = req.body;

   try {
       const user = await curriculum.findOne({ mail }).select('+password');

       if(!user)
           return res.status(200).send({ error: 'User not found' });

       if(!await bcrypt.compare(pass, user.password))
           return res.status(200).send({error: 'Invalid password'});

       user.password = undefined;

       const token = jwt.sign({ id: user.id }, secretLogged, {
           expiresIn: 3600,
       });

       res.send({ user, token });

   } catch (err) {
       console.log(err);
       return res.status(400).send({ error: 'Failed login: '+err })
   }

});

router.post('/reset/password', async (req, res) =>{
    const { mail } = req.body;

    try {
        const user = await curriculum.findOne({ mail });

        if(!user)
            return res.status(200).send({ error: 'Este e-mail não existe em nosso sistema' });
            // return res.status(200).send({ error: 'User not found' });

        res.send({ submit: true });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Failed login: '+err })
    }

});

module.exports = app => app.use('/auth', router);