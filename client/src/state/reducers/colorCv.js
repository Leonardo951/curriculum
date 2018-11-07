const colorCv = (state = '#0EB57D', action) => {

    console.log({
        colorCv: action.data
    });
    console.log(state);

    switch (action.type) {
        case 'CHANGE_COLOR':
            return action.data;
        default:
            return state;
    }
};

export default colorCv;