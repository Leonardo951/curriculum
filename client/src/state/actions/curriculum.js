// Change in personal data
export function changeName(data) {
    return {
        type: 'CHANGE_NAME',
        data
    }
}
export function changeMail(data) {
    return {
        type: 'CHANGE_MAIL',
        data
    }
}
export function changeNationality(data) {
    return {
        type: 'CHANGE_NATIONALITY',
        data
    }
}
export function changeDateBirth(data) {
    return {
        type: 'CHANGE_DATA_BIRTH',
        data
    }
}export function changeCivilStatus(data) {
    return {
        type: 'CHANGE_CIVIL_STATUS',
        data
    }
}export function changeAddress(data) {
    return {
        type: 'CHANGE_ADDRESS',
        data
    }
}
export function changeCity(data) {
    return {
        type: 'CHANGE_CITY',
        data
    }
}
export function changeZipCode(data) {
    return {
        type: 'CHANGE_ZIP_CODE',
        data
    }
}
export function changeUF(data) {
    return {
        type: 'CHANGE_UF',
        data
    }
}
export function changePhone(data) {
    return {
        type: 'CHANGE_PHONE',
        data
    }
}
export function changeSex(data) {
    return {
        type: 'CHANGE_SEX',
        data
    }
}
export function changeDeficient(data) {
    return {
        type: 'CHANGE_DEFICIENT',
        data
    }
}
// CHange in formations
export function changeFormation(data) {
    return {
        type: 'CHANGE_FORMATION',
        data
    }
}
export function changeCourse(data, index) {
    return {
        type: 'CHANGE_COURSE',
        data,
        index
    }
}
export function changeLocale(data, index) {
    return {
        type: 'CHANGE_LOCALE',
        data,
        index
    }
}
export function changeInitials(data, index) {
    return {
        type: 'CHANGE_INITIALS',
        data,
        index
    }
}
export function changeStatus(data, index) {
    return {
        type: 'CHANGE_STATUS',
        data,
        index
    }
}
export function changeDateEnd(data, index) {
    return {
        type: 'CHANGE_DATE_END',
        data,
        index
    }
}
export function changeSemOrYear(data, index) {
    return {
        type: 'CHANGE_SEM_OR_YEAR',
        data,
        index
    }
}
export function changePeriod(data, index) {
    return {
        type: 'CHANGE_PERIOD',
        data,
        index
    }
}
// Change in experiences
export function changeExperience(data) {
    return {
        type: 'CHANGE_EXPERIENCE',
        data
    }
}
export function changeJob(data, index) {
    return {
        type: 'CHANGE_JOB',
        data,
        index
    }
}
export function changeCompany(data, index) {
    return {
        type: 'CHANGE_COMPANY',
        data,
        index
    }
}
export function changePeriodWork(data, index) {
    return {
        type: 'CHANGE_PERIOD_WORK',
        data,
        index
    }
}
export function changeCurrentJob(data, index) {
    return {
        type: 'CHANGE_CURRENT',
        data,
        index
    }
}
export function changeMainAct(data, index) {
    return {
        type: 'CHANGE_MAIN_ACTIVITIES',
        data,
        index
    }
}
export function changeInitialsforExp(data, index) {
    return {
        type: 'CHANGE_INITIALS_EXP',
        data,
        index
    }
}
// Change in other informations
export function addQualifications(data) {
    return {
        type: 'ADD_QUALIFICATIONS',
        data
    }
}
export function removeQualifications(index) {
    return {
        type: 'REMOVE_QUALIFICATION',
        index
    }
}
export function addAdditionalInfo(data) {
    return {
        type: 'ADD_INFO_ADDITIONAL',
        data
    }
}
export function removeAdditionalInfo(index) {
    return {
        type: 'REMOVE_QUALIFICATIONS',
        index
    }
}
export function addSkills(data) {
    return {
        type: 'ADD_SKILLS',
        data
    }
}
export function removeSkill(index) {
    return {
        type: 'REMOVE_SKILL',
        index
    }
}