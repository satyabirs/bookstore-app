import {LOGIN_REQUEST, LOGOUT_REQUEST, SUCCESS, FAILURE} from './authTypes';

export const authenticateUser = (email, password) => {
    return dispatch => {
        dispatch(loginRequest());
        if(email==="test@testmail.com" && password ==="testpwd"){
            dispatch(success(true));
        }else{
            dispatch(failure());
        }
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: LOGOUT_REQUEST
        });
        dispatch(success(false));
    };
};

const loginRequest=()=>{
    return{
        type : LOGIN_REQUEST
    };
};

const success = isLoggedIn => {
    return{
        type : SUCCESS,
        payload: isLoggedIn
    };
};

const failure = isLoggedIn => {
    return{
        type:FAILURE,
        payload: false
    };
};