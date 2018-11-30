let mongoose = require('../database');
mongoose.set('useFindAndModify', false);
const bcrypt = require('bcryptjs'); //ver mais. serve para encriptar uma senha

let curriculumSchema = new mongoose.Schema({
    key: { type: String, unique: true, required: true},
    cpf: { type: String, unique: true, required: true},
    mail: { type: String, unique: true, lowercase: true, required: true},
    password: { type: String, select: false, required: true},
    dateUpdate: { type: Date, default: Date.now(), required: true},
    name: { type: String, lowercase: true },
    jobMain: { type: String, lowercase: true },
    otherMail: { type: String, lowercase: true },
    website: { type: String, lowercase: true },
    nationality: { type: String },
    dateBirth: { type: String},
    civilStatus: { type: String},
    address: { type: String, lowercase: true},
    city: { type: String, lowercase: true},
    zipCode: { type: String },
    state: { type: String, lowercase: true},
    phone: {
        phoneOne: { type: String },
        phoneTwo: { type: String },
        phoneThree: { type: String }
    },
    sex: { type: String },
    deficient: { type: Boolean },
    formation: { type: Array },
    experience: { type: Array },
    qualifications: { type: Array },
    additionalInfo: { type: Array },
    skills: { type: Array },
    socialNetworks: {
        Facebook: {use: { type: Boolean, default: false }, link: { type: String }},
        GPlus: {use: { type: Boolean, default: false }, link: { type: String }},
        Linkedin: {use: { type: Boolean, default: false }, link: { type: String }},
        Twitter: {use: { type: Boolean, default: false }, link: { type: String }},
        Github: {use: { type: Boolean, default: false }, link: { type: String }},
        Pinterest: {use: { type: Boolean, default: false }, link: { type: String }},
        Youtube: {use: { type: Boolean, default: false }, link: { type: String }},
        Instagram: {use: { type: Boolean, default: false }, link: { type: String }},
    },
    references: { type: Array },
});

//pre serve para fazer algo antes que algo seja chamado, no caso a função save
curriculumSchema.pre('save', async function (next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const curriculum = mongoose.model('curriculum', curriculumSchema);

module.exports = curriculum;