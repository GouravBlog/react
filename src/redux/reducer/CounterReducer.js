const initialState = {
    count: 0
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "INC":
            return { count: state.count + action.payload };
        case "DEC":
            return { count: state.count - action.payload };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
};


export default counterReducer;