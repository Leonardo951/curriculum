const initial_state = {
    daySelect: true,
    monthSelect: false,
    yearSelect: false,
    year: new Date().getFullYear(),
    yearMax: new Date().getFullYear(),
    yearMin: new Date().getFullYear()+1,
    objYears: [],
    day: 0,
    month: new Date().getMonth()+1,
    dateBirth: null,
    pageYear: 1000
};

const picker = (state = initial_state, action) => {

    switch (action.type) {
        case 'CHANGE_DAY':
            return {...state, day: action.data};
        case 'CHANGE_MONTH':
            return {...state, month: action.data};
        case 'CHANGE_YEAR':
            return {...state, year: action.data};
        case 'CHANGE_LIST_YEARS':
            return {...state, objYears: action.data.objYears, yearMax: action.data.yearMax, yearMin:  action.data.yearMin};
        case 'SELECT_OPTION_YEAR':
            return {...state, daySelect: false, monthSelect: false, yearSelect: true};
        case 'SELECT_OPTION_DAY':
            return {...state, daySelect: true, monthSelect: false, yearSelect: false};
        case 'SELECT_OPTION_MONTH':
            return {...state, daySelect: false, monthSelect: true, yearSelect: false};
        case 'SAVE_DATE_BIRTH':
            return {...state, dateBirth: action.data};
        default:
            return state;
    }
};

export default picker;