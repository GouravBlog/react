import { user_fail, user_req, user_success } from "../contants";

const initialState = {
    count: 10
};


export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return { ...state, count: state.count + action.payload };
        case "DEC":
            return { ...state, count: state.count - 1 };
        case "RES":
            return { ...state, count: 0 };
        default:
            return state;
    }
}

const initialStateUser = {
    loading: false,
    users: [],
    error: null
}

export const usersReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case user_req:
            return { ...state, loading: true };
        case user_success:
            return { ...state, users: action.payload, loading: false };
        case user_fail:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

