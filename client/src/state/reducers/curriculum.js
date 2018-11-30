import update from 'immutability-helper';

const initial_state = {
    isNew: false,
    keyCurriculum: '',
    name: '',
    jobMain: '',
    website: '',
    email: '',
    otherMail: '',
    nationality: '',
    dateBirth: null,
    civilStatus: '',
    address: '',
    city: '',
    zipCode: '',
    state: '',
    phone: {
        phoneOne: '',
        phoneTwo: '',
        phoneThree: ''
    },
    sex: '',
    deficient: false,
    formation: [
        {
            course: '',
            locale: '',
            initials: '',
            status: '',
            dateEnd: {year: 2018, month: 0},
            semOrYear: '',
            period: '',
        },
    ],
    experience: [
        {
            job: '',
            company: '',
            initials: '',
            periodWork: {from: {year: 2018, month: 0}, to: {year: 2018, month: 0}},
            current: false,
            mainAct: []
        },
    ],
    qualifications: [],
    additionalInfo: [],
    skills: [],
    socialNetworks: {
        Facebook: {use: false, link: ''},
        GPlus: {use: false, link: ''},
        Linkedin: {use: false, link: ''},
        Twitter: {use: false, link: ''},
        Github: {use: false, link: ''},
        Pinterest: {use: false, link: ''},
        Youtube: {use: false, link: ''},
        Instagram: {use: false, link: ''},
    },
    references: [
        {
            approved: false,
            profilePicture: '',
            userKey: '',
            userName: '',
            job: '',
            company: '',
            description: ''
        },
    ],
};

const curriculumData = (state = initial_state, action) => {

    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.data};
        case 'CHANGE_MAIL':
            return {...state, otherMail: action.data};
        case 'CHANGE_NATIONALITY':
            return {...state, nationality: action.data};
        case 'CHANGE_DATA_BIRTH':
            return {...state, dateBirth: action.data};
        case 'CHANGE_CIVIL_STATUS':
            return {...state, civilStatus: action.data};
        case 'CHANGE_ADDRESS':
            return {...state, address: action.data};
        case 'CHANGE_CITY':
            return {...state, city: action.data};
        case 'CHANGE_ZIP_CODE':
            return {...state, zipCode: action.data};
        case 'CHANGE_UF':
            return {...state, uf: action.data};
        case 'CHANGE_PHONE':
            return {...state, phone: action.data};
        case 'CHANGE_SEX':
            return {...state, sex: action.data};
        case 'CHANGE_DEFICIENT':
            return {...state, deficient: action.data};
        case 'CHANGE_FORMATION':
            return {...state, formation: action.data};
        case 'CHANGE_COURSE':
            return update(state, {
                formation: {
                    [action.index]: {
                        course: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_LOCALE':
            return update(state, {
                formation: {
                    [action.index]: {
                        locale: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_INITIALS':
            return update(state, {
                formation: {
                    [action.index]: {
                        initials: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_STATUS':
            return update(state, {
                formation: {
                    [action.index]: {
                        status: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_DATE_END':
            return update(state, {
                formation: {
                    [action.index]: {
                        dateEnd: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_SEM_OR_YEAR':
            return update(state, {
                formation: {
                    [action.index]: {
                        semOrYear: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_EXPERIENCE':
            return {...state, experience: action.data};
        case 'CHANGE_JOB':
            return update(state, {
                experience: {
                    [action.index]: {
                        job: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_COMPANY':
            return update(state, {
                experience: {
                    [action.index]: {
                        company: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_PERIOD_WORK':
            return update(state, {
                experience: {
                    [action.index]: {
                        periodWork: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_CURRENT':
            return update(state, {
                experience: {
                    [action.index]: {
                        current: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_MAIN_ACTIVITIES':
            return update(state, {
                experience: {
                    [action.index]: {
                        mainAct: {$set: action.data}
                    }
                }
            });
        case 'CHANGE_INITIALS_EXP':
            return update(state, {
                experience: {
                    [action.index]: {
                        initials: {$set: action.data}
                    }
                }
            });
        case 'ADD_QUALIFICATIONS':
            return {
                ...state,
                qualifications: [action.data, ...state.qualifications]
            };
        case 'REMOVE_QUALIFICATION':
            return {
                ...state,
                qualifications: state.qualifications.filter((tool, index) => index !== action.index),
            };
        case 'ADD_INFO_ADDITIONAL':
            return {
                ...state,
                additionalInfo: [action.data, ...state.additionalInfo]
            };
        case 'REMOVE_QUALIFICATIONS':
            return {
                ...state,
                additionalInfo: state.additionalInfo.filter((tool, index) => index !== action.index),
            };
        case 'ADD_SKILLS':
            return {
                ...state,
                skills: [action.data, ...state.skills]
            };
        case 'REMOVE_SKILL':
            return {
                ...state,
                skills: state.skills.filter((tool, index) => index !== action.index),
            };
        case 'UPDATE_CURRICULUM':
            return {
                ...state,
                isNew: true,
                keyCurriculum: action.payload.curriculum.key,
                email: action.payload.curriculum.email,
            };
        case 'NOT_NEW':
            return {
                ...state,
                isNew: false
            };
        case 'OPEN_CURRICULUM':
            return {
                keyCurriculum: action.payload.curriculum.key,
                name: action.payload.curriculum.name,
                jobMain: action.payload.curriculum.jobMain,
                website: action.payload.curriculum.website,
                email: action.payload.curriculum.mail,
                otherMail: action.payload.curriculum.otherMail,
                nationality: action.payload.curriculum.nationality,
                dateBirth: action.payload.curriculum.dateBirth,
                civilStatus: action.payload.curriculum.civilStatus,
                address: action.payload.curriculum.address,
                city: action.payload.curriculum.city,
                zipCode: action.payload.curriculum.zipCode,
                state: action.payload.curriculum.state,
                phone: {
                    phoneOne: action.payload.curriculum.phone.phoneOne,
                    phoneTwo: action.payload.curriculum.phone.phoneTwo,
                    phoneThree: action.payload.curriculum.phone.phoneThree
                },
                sex: action.payload.curriculum.sex,
                deficient: action.payload.curriculum.deficient,
                formation: action.payload.curriculum.formation,
                experience: action.payload.curriculum.experience,
                qualifications: action.payload.curriculum.qualifications,
                additionalInfo: action.payload.curriculum.additionalInfo,
                skills: action.payload.curriculum.skills,
                socialNetworks: {
                    Facebook: action.payload.curriculum.socialNetworks.Facebook,
                    GPlus: action.payload.curriculum.socialNetworks.GPlus,
                    Linkedin: action.payload.curriculum.socialNetworks.Linkedin,
                    Twitter: action.payload.curriculum.socialNetworks.Twitter,
                    Github: action.payload.curriculum.socialNetworks.Github,
                    Pinterest: action.payload.curriculum.socialNetworks.Pinterest,
                    Youtube: action.payload.curriculum.socialNetworks.Youtube,
                    Instagram: action.payload.curriculum.socialNetworks.Instagram,
                },
                references: action.payload.curriculum.references,
            };
        default:
            return state;
    }
};

export default curriculumData;