export function newUser(data) {
    return {
        type: 'REQUEST_LOADING',
        data
    }
}
export function changeMail(data) {
    return {
        type: 'CHANGE_MAIL',
        data
    }
}
export function changePass(data) {
    return {
        type: 'CHANGE_PASSWORD',
        data
    }
}
export function submitLogin(data) {
    return {
        type: 'REQUEST_LOGIN',
        data
    }
}
export function submitResetPass(data) {
    return {
        type: 'REQUEST_RESET_PASSWORD',
        data
    }
}
export function rebootConfig() {
    return {
        type: 'REBOOT_CONF_RESET_PASSWORD'
    }
}