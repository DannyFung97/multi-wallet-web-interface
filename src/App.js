import React, { Component } from 'react';
import './App.css';
import Wallet from "./components/Wallet.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wallet />
      </div>
    );
  }
}

export default App;
