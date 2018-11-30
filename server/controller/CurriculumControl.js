const express = require('express');

const curriculum = require('../model/curriculum');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secretLogged } = require('../config/auth');

router.post('/set', async (req, res) =>{

    const { name, otherMail, jobMain, website, nationality, dateBirth, civilStatus, address,
        city, zipCode, state, phone, sex, deficient, formation, experience,
        qualifications, additionalInfo, skills, socialNetworks } = req.body;

    try {
        const Curriculum = await curriculum.findOneAndUpdate({ "_id": req.curriculumId }, {
            $set: { name, otherMail, website, jobMain, nationality, dateBirth, civilStatus, address,
                city, zipCode, state, phone, sex, deficient, formation, experience,
                qualifications, additionalInfo, skills, socialNetworks, dateUpdate: Date.now() }
        }, {returnNewDocument: true});

        const token = jwt.sign({ id: req.curriculumId }, secretLogged, {
            expiresIn: 28800,
        });

        return res.status(200).send({ Curriculum, token })
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Failed registration: '+err })
    }
});

router.post('/get', async (req, res) =>{

    try {
        const Curriculum = await curriculum.findOne({ "key": req.body.key });

        return res.status(200).send({ Curriculum })
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Curriculum not found: '+err })
    }
});

module.exports = app => app.use('/curriculum', router);