const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const debug = require('debug')('nodestr:server');
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./server/controller/index')(app);

const route = router.get('/', (req, res, next)=>{
    res.status(200).send({
        connect: "true"
    });
});

app.use('/', route);

app.listen(port, () => {
    console.log('Server working in http://localhost:' + port);
});

//fazer função para pegar a porta se for servidor

//fazer o debug

// fazer função para trtar erros