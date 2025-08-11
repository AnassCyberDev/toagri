import { AUTH_ERROR, USER_LOADED, USER_AUTHENTICATED } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LOADED:
            localStorage.setItem('token', action.payload.token);
            console.log(action.payload);
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false
            };
        case USER_AUTHENTICATED:
            return {
                ...state,
                user: action.payload,
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                isLoading: false
            };
        // If you want to manage loading state, uncomment and use the USER_LOADING action
        // case USER_LOADING:
        //     console.log('user loading');
        //     return {
        //         ...state,
        //         isLoading: true
        //     };
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null
            };
        default:
            return state;
    }
}
