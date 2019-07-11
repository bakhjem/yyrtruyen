import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routers from './Router/Routers';

class App extends Component {
  render() {
    return (
      <Router>
        <Routers></Routers>
      </Router>
    );
  }
}

export default App;
