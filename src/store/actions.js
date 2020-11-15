import * as actions from './actionTypes';

export const authStart = () => ({
    type: actions.AUTH_START
});

export const authSuccess = (token, userData) => ({
    type: actions.AUTH_SUCCESS,
    payload: {
        token,
        userData
    }
});

export const authFail = () => ({
    type: actions.AUTH_FAIL
});

export const logOut = () => ({
    type: actions.AUTH_LOGOUT
});
