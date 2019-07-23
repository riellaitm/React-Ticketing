import React, { Component} from 'react';
import './App.css';
import Loginn from './components/loginn';
import Home from './components/Home';
import ButtonSubmit from './components/ButtonSubmit';
import Tambah from './components/Tambah';

import {BrowserRouter, Link, Switch, Route}  from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div> 
        <Switch>
        <Route exact path="/" component={Loginn}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Tambah" component={Tambah}/>
        </Switch>
      </div>
      <div>
        {/* <ButtonSubmit href="/Home"/> */}
      </div>

      </BrowserRouter>
    </div>
  );
}
export default App;
