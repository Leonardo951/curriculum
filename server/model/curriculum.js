let mongoose = require('../database');

const bcrypt = require('bcryptjs'); //ver mais. serve para encriptar uma senha

let curriculumSchema = new mongoose.Schema({
    key: { type: String, unique: true, required: true},
    cpf: { type: String, unique: true, required: true},
    mail: { type: String, unique: true, lowercase: true, required: true},
    password: { type: String, select: false, required: true},
    dateUpdate: { type: Date, default: Date.now(), required: true},
    name: { type: String, lowercase: true},
    otherMail: { type: String, lowercase: true},
    nationality: { type: String },
    dateBirth: { type: String},
    civilStatus: { type: String},
    address: { type: String, lowercase: true},
    city: { type: String, lowercase: true},
    zipCode: { type: String },
    uf: { type: String, uppercase: true},
    phone: {
        phoneOne: { type: String},
        phoneTwo: { type: String },
        phoneThree: { type: String }
    },
    sex: { type: String, enum: ['M', 'F', 'I']},
    deficient: { type: Boolean},
    formation: { type: Array},
    experience: { type: Array},
    qualifications: { type: Array},
    additionalInfo: { type: Array},
    skills: { type: Array},
    socialNetworks: { type: Array},
});

//pre serve para fazer algo antes que algo seja chamado, no caso a função save
curriculumSchema.pre('save', async function (next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const curriculum = mongoose.model('curriculum', curriculumSchema);

module.exports = curriculum;