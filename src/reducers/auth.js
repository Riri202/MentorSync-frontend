import {
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    SIGNIN_FAILURE,
    SIGNIN_SUCCESS,   
    SIGN_OUT,
} from "..actions/types";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { isLoggedin: true, user } : { isLoggedin: false, user: null }

export default function (state = initialState.isLoggedin, action) {
    switch(action.type) {
        case SIGNIN_SUCCESS: 
        return {
            ...state,
            isLoggedin: true,
            user: payload.user,
        };
        case SIGNIN_FAILURE: 
        return {
            ...state,
            isLoggedin: false,
            user: null
        };
        case SIGNUP_SUCCESS: 
        return {
            ...state,
            isLoggedin: false,
        };
        case SIGNUP_FAILURE: 
        return {
            ...state,
            isLoggedin: false
        };
        case SIGN_OUT: 
        return {
            ...state,
            isLoggedin: false,
            user: null
        };
        default:
            return state
    }
}