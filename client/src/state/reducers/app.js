const initial_state = {
    screen: "",
    loading: false
};

const app = (state = initial_state, action) => {

    switch (action.type) {
        case 'SCREEN_SELECT':
            return {...state, screen: action.data};
        case 'LOADING_GET_CURRICULUM':
            return {...state, loading: true};
        case 'OPEN_CURRICULUM':
            return {...state, loading: false};
        case 'FAILED_OPEN_CURRICULUM' :
            return {...state, loading: false};
        default:
            return state;
    }
};

export default app;