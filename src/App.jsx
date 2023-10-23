import React, { Component } from "react";
import SecondsCounter from "./components/secondsCounter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  componentDidMount() {   // el componente compDidMount inicia un intervalo que actualiza el estado del componente (seconds) cada segundo.
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() { // EL componente compWillUnmount detiene el intervalo que actualiza el contador de segundos. 
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <SecondsCounter seconds={this.state.seconds} />
      </div>
    );
  }
}

export default App;