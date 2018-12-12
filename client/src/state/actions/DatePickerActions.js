export function changeDay(data) {
    return {
        type: 'CHANGE_DAY',
        data
    }
}
export function changeMonth(data) {
    return {
        type: 'CHANGE_MONTH',
        data
    }
}
export function changeYear(data) {
    return {
        type: 'CHANGE_YEAR',
        data
    }
}
export function changeListYears(data) {
    return {
        type: 'CHANGE_LIST_YEARS',
        data
    }
}
export function selectOptionDay() {
    return {
        type: 'SELECT_OPTION_DAY'
    }
}
export function selectOptionYear() {
    return {
        type: 'SELECT_OPTION_YEAR'
    }
}
export function selectOptionMonth() {
    return {
        type: 'SELECT_OPTION_MONTH'
    }
}
export function saveDateBirth(data) {
    return {
        type: 'SAVE_DATE_BIRTH',
        data
    }
}