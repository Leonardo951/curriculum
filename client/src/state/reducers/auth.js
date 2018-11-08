const initial_state = {
    cpf: '',
    mail: '',
    password: '',
    loading: false,
    failed: false,
    error: '',
    token: '',
    key: ''
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
                token: action.payload.token,
                loading: false,
                key: action.payload.user.key,
            };
        case 'REQUEST_LOADING':
            return {...state, loading: true};
        case 'FAILED_NEW_REGISTER':
            return {...state, loading: false, failed: true, error: action.payload.error};
        default:
            return state;
    }
};

export default auth;