let mongoose = require('mongoose');

// const db = mongoose.connect('mongodb://localhost:27017/resume')
//     .then(()=>{
//         console.log('Database connection successful')
//         }
//     )
//     .catch((err) => {
//         console.error('Database connection error: '+err)
//         }
//     );

const server = 'localhost:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'resume';      // REPLACE WITH YOUR DB NAME
class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error: '+err)
            })
    }
}
module.exports = new Database();

// mongoose.connection.on('connected', ()=> {
//     console.log('=====  MongoDb connected successfully =====');
// });
//
// mongoose.connection.on('error', (err)=> {
//     console.log('==== Error connection MongoDb: ' + err);
// });
//
// mongoose.connection.on('disconnected', ()=> {
//     console.log('===== Closed connection with MongoDb =====');
// });

// modules.exports = db;