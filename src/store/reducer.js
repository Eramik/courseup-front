import * as actions from './actionTypes';

const initialState = {
    token: null,
    userData: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.AUTH_START:
            return {
                ...state,
                loading: true
            };
        case actions.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                userData: action.payload.userData
            };
        case actions.AUTH_FAIL:
            return {
                ...state,
                loading: false,
                token: null,
                userData: null
            };
        case actions.AUTH_LOGOUT:
            return {
                ...state,
                loading: false,
                token: null,
                userData: null
            };
        default:
            return state;
    }
};

export default reducer;
