const express = require('express');
const router = express.Router();
const authMidd = require('../middlware/auth');

router.use(authMidd);

router.get('/', (req, res) =>{
   res.send({ ok: true });
});

module.exports = app => app.use('/main', router);