const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secretRegister } = require('../config/auth');

router.post('/set', async (req, res, next) =>{

    let authHeader;

    if(req.headers.authorization){
        authHeader = req.headers.authorization;
    }else{
        return res.status(401).send({ error: 'No token provider' });
    }

    if(!authHeader)
        return res.status(401).send({ error: 'No token provider' });

    const parts = authHeader.split(' ');

    if(!parts.length === 2)
        return res.status(401).send({ error: 'Token error' });

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token malformatted' });

    jwt.verify(token, secretRegister, (err, decoded) =>{
    if(err)
        return res.status(401).send({ error: 'Token invalid'});

    req.curriculumId = decoded.id;

    return next();
    })
});

module.exports = app => app.use('/curriculum', router);