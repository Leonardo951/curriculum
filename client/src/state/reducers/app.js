const initial_state = {
    screen: "",
};

const app = (state = initial_state, action) => {

    switch (action.type) {
        case 'SCREEN_SELECT':
            return {...state, screen: action.data};
        default:
            return state;
    }
};

export default app;