import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



import {Construction} from './components/underco';
import {Details} from './components/details';
import acelogo from './images/logo-ace-athens.png';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="logo-container">
          <img src={acelogo} className="logo" alt="logo" />
        </div>
        <header className="App-header">
          <h1 className="App-title">Under Construction</h1>
          <Construction />
        </header>
        <Details />
      </div>
    );
  }
}

export default App;
