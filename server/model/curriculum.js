let mongoose = require('../database');

const bcrypt = require('bcryptjs'); //ver mais. serve para encriptar uma senha ou gerar autmaticamente

let curriculumSchema = new mongoose.Schema({
    key: { type: String, unique: true, required: true},
    cpf: { type: Number, unique: true, required: true},
    mail: { type: String, unique: true, required: true, lowercase: true},
    password: { type: String, required: true, select: false },
    dateUpdate: { type: Date, default: Date.now() },
    fullName: String,
    nationality: String,
    dateBirth: String,
    civilStatus: String,
    adress: String,
    uf: String,
    cep: Number,
    phone: [],
    formation: [
        {resume: String, local: String, initials: String, status: String, dateConclusion: String, half: String, period: String}
    ],
    experience: [
        {office: String, company: String, nitials: String, startDate: String, endDate: String, working: Boolean, activities: []}
    ],
    interests: [],
    additional: [],
    qualifications: [
        {title: String, description: String, date: String}
    ]
});

//pre serve para fazer algo antes que algo seja chamado, no caso a função save
curriculumSchema.pre('save', async function (next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const curriculum = mongoose.model('curriculum', curriculumSchema);

module.exports = curriculum;