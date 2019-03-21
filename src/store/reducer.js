const initialState = {
    count:0
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP':
            if(newState.count < 20) {
                newState.count++;
            }
            break;
        case 'AGE_DOWN':
            if (newState.count >=1) {
                newState.count--;
            }
            break;
        case 'AGE_RESET':
            newState.count = 0
            break;
        }

    return newState;
};

export  default reducer;