import React, { Component } from 'react';
import './Meyer.css';
import './App.css';

import Ring from './Ring.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Ring/><Ring/>
        </p>
      </div>
    );
  }
}

export default App;
