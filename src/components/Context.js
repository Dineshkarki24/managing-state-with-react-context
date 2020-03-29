import React from "react";

const CounterContext = React.createContext();

class CounterProvider extends React.Component {
  state = {
    count: 0
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <CounterContext.Provider
        value={{ ...this.state, handleIncrement: this.handleIncrement }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

const CounterConsumer = CounterContext.Consumer;

export { CounterProvider, CounterConsumer };
