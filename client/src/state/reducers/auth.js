const initial_state = {
    cpf: '',
    mail: '',
    password: '',
    loading: false,
    failed: false,
    error: '',
    key: '',
    submitResetPass: false
};

const auth = (state = initial_state, action) => {

    switch (action.type) {
        case 'NEW_REGISTER':
            return {
                ...state,
                cpf: action.payload.user.cpf,
                mail: action.payload.user.mail,
                password: null,
                failed: false,
                loading: false,
                key: action.payload.user.key,
            };
        case 'FAILED_NEW_REGISTER':
            return {...state, loading: false, failed: true, error: action.payload.error};
        case 'CHANGE_MAIL':
            return {...state, mail: action.data};
        case 'CHANGE_PASSWORD':
            return {...state, password: action.data};
        case 'REQUEST_LOADING':
            return {...state, loading: true};
        case 'REQUEST_LOGIN':
            return {...state, loading: true};
        case 'REQUEST_RESET_PASSWORD':
            return {...state, loading: true};
        case 'LOGIN_VALID':
            return {
                ...state,
                mail: action.payload.user.mail,
                password: null,
                failed: false,
                loading: false,
                key: action.payload.user.key,
            };
        case 'FAILED_SUBMIT_RESET_PASSWORD':
            return {
                ...state,
                failed: true,
                loading: false,
                error: action.payload.error,
            };
        case 'SUCCESS_SUBMIT_RESET_PASSWORD':
            return {
                ...state,
                loading: false,
                submitResetPass: true,
            };
        case 'REBOOT_CONF_RESET_PASSWORD':
            return {
                ...state,
                loading: false,
                error: "",
                failed: false,
                submitResetPass: false,
            };
        default:
            return state;
    }
};

export default auth;