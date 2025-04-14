
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
    };
    
  }

  increment() {
    this.setState((prevState) => ({
      Count: prevState.Count + 1,
    }));
    console.log(this.state.Count);
  }

  render() {
    return (
      <div>
        <h1>Vaibhavi - {this.state.Count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
