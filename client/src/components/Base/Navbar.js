import React, { useState } from 'react';
import UseStyles from '../style.js';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth.js';
import auth from '../../reducers/auth.js';
import { connect } from 'react-redux';

function Navbar(props) {
  const classes = UseStyles();
  console.log(props)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className={`navbar-brand ${classes.page_now}`} href="#">Giveaway</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={{ pathname: `/`, fromDashboard: false }} className="nav-link active">Giveaway</Link>
            </li>
            <li className="nav-item">
              <Link to={{ pathname: '/history/', fromDashboard: false }} className="nav-link">History</Link>
            </li>
            {props.auth.isAuthenticated ? (
                          <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User
                            </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to={{ pathname: '/profile/', fromDashboard: false }} className="dropdown-item">Profile</Link></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Exit</a></li>
                          </ul>
                        </li>
            ):
            (
              <div style={{display: 'inherit'}}>
            <li><Link to={{ pathname: '/profile/login/', fromDashboard: false, 
            value: 'signIn' }} className="nav-link" >Login</Link></li>
            <li><Link to={{ pathname: '/profile/login/', fromDashboard: false,
            value: 'signUp' }} className="nav-link" >Register</Link></li>
            </div>
            )}
          </ul>
        </div>
        <form className="d-flex justify-content-end">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);