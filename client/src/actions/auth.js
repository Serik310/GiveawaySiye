import axios from 'axios';

import { tokenConfig } from './config.js';

import {
    USER_LOADED,
    USER_LOADING, 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from './types.js';


//Login User

export const login = (email, password) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Request Body
    const body = JSON.stringify({email, password})

    axios
        .post('http://127.0.0.1:8000/auth-api/login/', body, config)
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.non_field_errors
            })
        })
};

export const loadUser = () => (dispatch, getState) => {
    if('Authorization' in tokenConfig(getState)['headers']) {
        dispatch({type: USER_LOADING});
    }
    axios
        .get('http://127.0.0.1:8000/auth-api/user', tokenConfig(getState))
        .then(response => {
            dispatch({
                type: USER_LOADED,
                payload: response.data
            })
        })
        .catch(error => {
                console.log(error)
            })
}

export const logout = () => (dispatch, getState) => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
}

export const register = (username, email, password, first_name, last_name, phone) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({username, email, password, first_name, last_name, phone})

    axios
        .post('http://127.0.0.1:8000/auth-api/signup/', body, config)
        .then(response => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data
            })
        })
}
