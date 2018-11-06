import React, { Component } from 'react';
import './App.css';
import ChooseCountry from './components/ChooseCountry';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ChooseCountry/>
        </header>
      </div>
    );
  }
}

export default App;
