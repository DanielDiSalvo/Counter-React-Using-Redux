const initialState = {
    count:0
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type) {
        case 'COUNT_UP':
            if (newState.count < 20) {
                newState.count++;
            }
            break;
        case 'COUNT_DOWN':
            if (newState.count >=1) {
                newState.count--;
            }
            break;
        case 'COUNT_RESET':
            newState.count = 0
            break;
        }

    return newState;
};

export  default reducer;