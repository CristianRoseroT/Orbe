import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import Home from './pages/Home';
import Userpage from './pages/Userpage';
import Settings from './pages/Settings';
import Account from './pages/Account';


import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
  render(){
      return(
          <BrowserRouter basename={'/'}>
              <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/userpage' element={<Userpage/>} />
              <Route path='/defaultsettings' element={<Settings/>} />
              <Route path='/accountinformation' element={<Account/>} />
              </Routes>
          </BrowserRouter>
      )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();