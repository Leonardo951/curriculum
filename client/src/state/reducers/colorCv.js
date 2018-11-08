const colorCv = (state = '#0EB57D', action) => {

    switch (action.type) {
        case 'CHANGE_COLOR':
            return action.data;
        default:
            return state;
    }
};

export default colorCv;