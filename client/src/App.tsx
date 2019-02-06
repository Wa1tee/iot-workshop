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
  state = {
    sensors: {
      isLoading: false,
      data: [],
      error: null
    },
    readings: {
      isLoading: false,
      data: [],
      error: null
    }
  };

  async fetchSensors() {
    try {
      const response = await fetch();
    }
  }

  render() {
    return (
      <div className="App">
        Konsta on homo  =D
      </div>
    );
  }
}

export default App;
