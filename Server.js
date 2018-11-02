const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8001;
// const route = require("./server/modules");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./server/controller/authControl')(app);


app.listen(port, () => {
    console.log('Server working in http://localhost:' + port);
});
//
// app.get('/api', (req, res) => {
//     res.send('API working');
// });
//
// app.use("/api", route);
