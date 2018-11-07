const express = require('express');

const curriculum = require('../model/curriculum');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secret } = require('../config/auth');

router.get('/register', async (req, res) =>{
    return res.send({ "Ok": "parabens. vc é foda!" })
    // const { cpf } = req.body;
    //
    // const token = jwt.sign({ id: curriculum.id }, secret, {
    //     expiresIn: 86400,
    // });
    //
    // try {
    // if(await curriculum.findOne({ cpf }))
    //     return res.status(400).send({error: "cpf já cadastrado"});
    //
    //     const Curriculum = await curriculum.create(req.body);
    //
    //     Curriculum.password = undefined; //para não mostrar o valor quando voltar.
    //
    //     return res.send({ Curriculum, token })
    // } catch (err) {
    //     return res.status(400).send({ error: 'Failed registration: '+err })
    // }
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