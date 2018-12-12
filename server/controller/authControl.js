const express = require('express');
const curriculum = require('../model/curriculum');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secretRegister, secretLogged } = require('../config/auth');
const { emailIsValid, cpfIsValid } = require('../functions/validation');

router.post('/register', async (req, res) =>{
    const { cpf, mail, password } = req.body;

    try {
        if(await curriculum.findOne({ cpf }))
            return res.status(200).send({error: "CPF já cadastrado"});

        if(!cpfIsValid(cpf))
            return res.status(200).send({error: "O CPF informado não é válido"});

        if(!emailIsValid(mail))
            return res.status(200).send({error: "O e-mail informado é inválido"});

        if(password.length < 8)
            return res.status(200).send({error: "A senha informada não possui os requisitos necessários"});

        while(true) {
            req.body.key = Math.random().toString(36).slice(-10);
            if(!await curriculum.findOne({ key: req.body.key })){
                break;
            }
        }

        const Curriculum = await curriculum.create(req.body);

        const hashCreate = await bcrypt.hash(req.body.key, 1);

        const token = jwt.sign({ id: Curriculum.id }, secretRegister, {
            expiresIn: 3600,
        });

        Curriculum.password = undefined; //Para não mostrar o valor quando voltar.

        setTimeout(()=>{
            return res.status(200).send({ Curriculum, token, hashCreate })
        },5000);
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