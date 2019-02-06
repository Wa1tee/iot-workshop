import React, { Component } from 'react';


interface State{
  sensors: {
    isLoading: boolean,
    data: Sensor[],
    error: any
  },
  readings: {
    isloading: boolean,
    data: Reading[],
    error: any
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        Konsta on homo  =D
      </div>
    );
  }
}

export default App;
