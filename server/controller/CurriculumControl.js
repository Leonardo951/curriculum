const express = require('express');

const curriculum = require('../model/curriculum');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secretLogged } = require('../config/auth');

router.post('/curriculum', async (req, res) =>{

    const { name, otherMail, nationality, dateBirth, civilStatus, address,
        city, zipCode, uf, phone, sex, deficient, formation, experience,
        qualifications, additionalInfo, skills, socialNetworks } = req.body;

    try {
        const Curriculum = await curriculum.findOneAndUpdate({ "_id": req.curriculumId }, {
            $set: { name, otherMail, nationality, dateBirth, civilStatus, address,
                city, zipCode, uf, phone, sex, deficient, formation, experience,
                qualifications, additionalInfo, skills, socialNetworks, dateUpdate: Date.now() }
        }, { returnNewDocument: true });

        const token = jwt.sign({ id: req.curriculumId }, secretLogged, {
            expiresIn: 28800,
        });

        return res.status(200).send({ Curriculum, token })
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Failed registration: '+err })
    }
});

module.exports = app => app.use('/register', router);