import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import components
import AddToggle from './components/AddToggle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddToggle/>
      </div>
    );
  }
}

export default App;
