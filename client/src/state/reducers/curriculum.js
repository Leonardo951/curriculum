import update from 'immutability-helper';

const initial_state = {
    name: null,
    otherMail: null,
    nationality: null,
    dateBirth: null,
    civilStatus: '',
    address: null,
    city: null,
    zipCode: null,
    uf: '',
    phone: {
        phoneOne: null,
        phoneTwo: null,
        phoneThree: null
    },
    sex: null,
    deficient: null,
    formation: [
        {
            course: null,
            locale: null,
            initials: null,
            status: '',
            dateEnd: {year: 2018, month: 0},
            semOrYear: '',
            period: ''
        },
    ],
    experience: [
        {
            job: null,
            company: null,
            initials: null,
            periodWork: {from: {year: 2018, month: 0}, to: {year: 2018, month: 0}},
            current: false,
            mainAct: []
        },
    ]
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
        default:
            return state;
    }
};

export default curriculumData;