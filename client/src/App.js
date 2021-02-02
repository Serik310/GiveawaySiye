import React, { useState, useEffect, Component} from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap';
import Navbar from '../src/components/Base/Navbar.js';
import Footer from '../src/components/Base/Footer.js';
import MainContent from '../src/components/MainContent/MainContent.js';
import History from '../src/components/History/History.js';
import Login from '../src/components/Profile/Login.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import store from './store.js';
import Profile from './components/Profile/Profile.js';
import { loadUser } from '../src/actions/auth.js';

class App extends Component {

  componentDidMount () {
    store.dispatch(loadUser());
  }

render() {
  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={MainContent} />
          <Route path='/history/' exact component={History} />
          <Route path='/profile/login/' exact component={Login} />
          <Route path='/profile/' exact component={Profile} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
    </div>
  );
}
}
export default App;
