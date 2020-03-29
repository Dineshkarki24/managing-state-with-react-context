import React, { Component } from "react";
import { CounterConsumer } from "./Context";

class Counter extends Component {
  render() {
    return (
      <CounterConsumer>
        {value => {
          console.log(value);
          return (
            <>
              <h1>Your Counter is :{value.count} </h1>
              <button onClick={() => value.handleIncrement()}>Increment</button>
            </>
          );
        }}
      </CounterConsumer>
    );
  }
}

export default Counter;
