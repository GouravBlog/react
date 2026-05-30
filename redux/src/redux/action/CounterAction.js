import { user_fail, user_req, user_success } from "../contants"

export const inc = (num) => {
    return {
        type: "INC",
        payload: num
    }
}

export const dec = () => {
    return {
        type: "DEC"
    }
}

export const reset = () => {
    return {
        type: "RES",
    }
}

export const fetchData = () => async (dispatch) => {
    try {
        dispatch({ type: user_req });

        let data = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
        data = await data.json();

        dispatch({ type: user_success, payload: data });
    } catch (error) {
        dispatch({
            type: user_fail,
            payload: error.message
        })
    }
}


