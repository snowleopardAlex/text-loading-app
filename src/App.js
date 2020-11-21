// We let the user know that something is loading in the background
// App should be responsible for rendering condition because it is a
// parent. It should be in charge of conditional rendering. 
import React, { Component } from 'react';
import Conditional from "./Conditional";

import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? <h1>Loading...</h1> : 
        <Conditional />}
      </div>
    );
  }
}

export default App;
