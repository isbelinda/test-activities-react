import React, { Component } from 'react';
import './App.css';
import Lists from './components/Lists'
import Avatar from './images/avatar.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar block-page">
          <div className="item-1">Test activities</div>
          <div><img src={Avatar}/></div>
        </nav>
        <div className="container">
          <Lists></Lists>
        </div>
      </div>
    );
  }
}

export default App;
