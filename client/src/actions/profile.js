import axios from 'axios';

import EDIT_PROFILE from './types.js';
import tokenConfig from './config.js';
import { bindActionCreators } from 'redux';


export const EditProfile = (
    first_name,
    last_name,
    phone,
    email,
    pk,
    handleSuccess,
    handleErrors) => (dispatch, getState) => {
        const body = JSON.stringify({first_name, last_name, phone, email});

        axios
            .patch('http://127.0.0.1:8000/auth-api/user/', body, tokenConfig(getState))
            .then(respone => {
                handleSuccess();
                dispatch({
                    type: EDIT_PROFILE,
                    payload: respone.data,
                })
            })
            .catch(error => {
                let first_error =   Object.keys(error.respone.data)[0];
                let error_text  =   `${first_error} - ${error.respone.data[first_error]}`;
                handleErrors(error_text);
            })
    }