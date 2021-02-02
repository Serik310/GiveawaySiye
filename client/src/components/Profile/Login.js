import React, { useState } from 'react';
import { connect } from "react-redux";
import CSRFToken from '../../csrftoken.js';

import { login, register } from '../../actions/auth.js';
const Login = (props) => {

  const {
    value
  } = props

  const defaultStateSignIn = {
    'email': '',
    'password': '',
  }

  const defaultStateSignUp = {
    'firstName': '',
    'lastName': '',
    'phone': '',
    'email': '',
    'password1': '',
    'password2': '',
  }

  const [signInValues, setSignInValues] = useState(defaultStateSignIn)
  const [signUpValues, setSignUpValues] = useState(defaultStateSignUp)
  
  if (props.auth.isAuthenticated &&
    (Object.keys(signInValues).filter(item => signInValues[item] !=='').length ||
      Object.keys(signUpValues).filter(item => signUpValues[item] !=='').length)) {
    setSignInValues(defaultStateSignIn);
    setSignUpValues(defaultStateSignUp);
  }

  const handleSignInChange = (event) => {
    console.log(event.target.name)
    let obj = Object.assign({}, signInValues)
    obj[event.target.name] = event.target.value
    console.log(obj)
    setSignInValues(obj)
  }

  const handleSignUpChange = (event) => {
    console.log(event.target.name)
    let obj = Object.assign({}, signUpValues)
    obj[event.target.name] = event.target.value
    console.log(obj)
    setSignUpValues(obj)
  }

  const submitSignIn = (e) => {
    e.preventDefault()
    props.login(
      signInValues['email'],
      signInValues['password'],
    )
  }

  const submitSignUp = (e) => {
    e.preventDefault()
    props.register(
      signUpValues['email'],
      signUpValues['password'],
      signUpValues['firstName'],
      signUpValues['lastName'],
      signUpValues['phone'],
    )
  }

  const formatErrorText = (text) => {
    if (typeof(text) === 'string') return text;
    return text[0];
  }

  return (
    <div className="content" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="form-block">
                  {props.location.value === 'signIn' ? (
                    <form onSubmit={submitSignIn}>
                        <label for="email">Email</label>
                        <input type="text" className="form-control" id="email" onChange={handleSignInChange} value={signInValues['email'] || ''} name='email'/>

                      <div className="form-group last mb-4">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" onChange={handleSignInChange} value={signInValues['password'] || ''} name='password'/>
                      </div>
                      <CSRFToken />
                      <input type="submit" value="Log In" className="btn btn-pill text-white btn-block btn-primary" />
                    </form>
                    
                  ) :
                    (
                      <form onSubmit={submitSignUp}>

                        <div className="form-group first">
                          <label for="email">Email</label>
                          <input type="text" className="form-control" id="email" onChange={handleSignUpChange} value={signUpValues['email'] || ''} name='email'/>

                        </div>
                        <div className="form-group last mb-4">
                          <label for="password">Password</label>
                          <input type="password" className="form-control" id="password" onChange={handleSignUpChange} value={signUpValues['password'] || ''} name='password'/>

                        </div>
                        <div className="form-group last mb-4">
                          <label for="firstName">First Name</label>
                          <input type="text" className="form-control" id="firstName" onChange={handleSignUpChange} value={signUpValues['firstName'] || ''} name='firstName'/>

                        </div>
                        <div className="form-group last mb-4">
                          <label for="lastName">Last Name</label>
                          <input type="text" className="form-control" id="lastName" onChange={handleSignUpChange} value={signUpValues['lastName'] || ''} name='lastName'/>

                        </div>
                        <div className="form-group last mb-4">
                          <label for="phone">Phone</label>
                          <input type="tel" className="form-control" id="phone" pattern='[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}' required onChange={handleSignUpChange} value={signUpValues['phone']} name='phone'/>

                        </div>
                        
                        <CSRFToken />
                        <input type="submit" value="Sign Up" className="btn btn-pill text-white btn-block btn-primary"/>
                      </form>)
                      }
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

const mapStateProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateProps, { login, register })(Login);