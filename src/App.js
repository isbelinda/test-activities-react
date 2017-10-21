import React, { Component } from 'react';
import './App.css';
import Lists from './components/Lists'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <div>Test activities</div>
          
        </nav>
        <div className="container">
          <Lists></Lists>
        </div>
      </div>
    );
  }
}

export default App;
