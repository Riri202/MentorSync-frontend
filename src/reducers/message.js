import {SET_MESSAGE, CLEAR_MESSAGE} from '../actions/types'

const initialState = {};

export default function (state = initialState, action) {
    switch(action.type) {
        case SET_MESSAGE:
            return {message: payload}
        case CLEAR_MESSAGE: 
            return {message: ""};
        default: 
        return state;

    }
}

