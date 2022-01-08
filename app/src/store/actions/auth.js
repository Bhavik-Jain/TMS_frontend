//  EVENTS THAT TAKE PLACE AFTER RECEIVEING THE ACTIONS
import * as actionTypes from "./actionTypes";
import axios from 'axios';
export const authStart = () =>{
    return {
        // message we receive when we execute this function
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token =>{
    return {
        // message we receive when we execute this function
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error =>{
    return {
        // message we receive when we execute this function
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () =>{
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeOut = expirationTime =>{
    return dispatch => {
        setTimeout(()=>{
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) =>{
    return dispatch =>{
        // dispatch will take care that authentication is started 
        dispatch(authStart());
        // object username and password as been passed to the post request 
        axios.post('http://127.0.0.1:8000/login/',{
            username: username,
            password: password
        })
        .then(res => {
            // the response will be the token which will returned after successful login
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600*1000);
            // store token in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600));
        })
        .catch(err =>{
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (username, email, password) =>{
    return dispatch =>{
        // dispatch will take care that authentication is started 
        dispatch(authStart());
        // object username and password as been passed to the post request 
        axios.post('http://127.0.0.1:8000/api/users/',{
            username: username,
            password: password
        })
        .then(res => {
            // the response will be the token which will returned after successful login
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600*1000);
            // store token in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600));
        })
        .catch(err =>{
            dispatch(authFail(err))
        })
    }
}

// check weather token is stored in the localstorage if it is not then logout
export const authCheckState = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token');
        if(token === undefined){
            dispatch(logout());
        }
        else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()){
                dispatch(logout());
            }
            else{
                dispatch(authSuccess(token));
                //                          expire date             -   time right now
                dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}