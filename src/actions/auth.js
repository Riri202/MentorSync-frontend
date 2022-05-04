import {
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    SIGN_OUT,
    SIGNIN_FAILURE,
    SIGNIN_SUCCESS,
    SET_MESSAGE,
} from "./types";
import authService from "../services/auth.service";

export const signup = (username, email, password) => (dispatch) => {
    return authService.signup(username, email, password).then(
        response => {
            dispatch({
                type: SIGNUP_SUCCESS
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.message
            });
            return Promise.resolve()
        }
    )
};
export const signin = (email, password) => (dispatch) => {
    return authService.signin(email, password).then(
        response => {
            dispatch({
                type: SIGNIN_SUCCESS,
                payload: { user: response }
            });
            return Promise.resolve();
        },
        error => {
            dispatch({
                type: SIGNIN_FAILURE,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: error.message
            });
            Promise.reject();
        }
    )
}
export const logout = () => {
    authService.signout();
    dispatch({
        type: SIGN_OUT
    })
} 