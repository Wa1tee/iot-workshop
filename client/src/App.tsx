import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


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
      data: [],
      error: null
    },
    readings: {
      data: [],
      error: null
    }
  };

  componentDidMount(){
    this.fetchSensors();
    this.fetchReadings();
    setInterval(this.fetchSensors.bind(this, 3000));
    setInterval(this.fetchReadings.bind(this, 3000));
  }

  async fetchSensors() {
    try {
      const response = await fetch( '/api/getsensors');

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const data: Sensor[] = await response.json();

      this.setState( {
        sensors: {
          data,
          error: null
        }
      });
    }
    catch(error){
      this.setState( {
        sensors: {
          data: [],
          error: error.toString()
        }
      });
    }
  }

  async fetchReadings(){
    try{
        const response = await fetch('/api/getreadings/100');
    
        if (!response.ok) {
          throw Error(response.statusText);
        }
    
        const data: Reading[] = await response.json();

        this.setState({
          readings: {
            data,
            error: null
          }
        });
      }
      catch (error){
        this.setState({
          readings: {
            data: [],
            error: error.toString()
          }
        });
      }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Grid>
          <Col xs={12}>
            <Panel>
              <Panel.Heading>
              Konsta :D
              </Panel.Heading>
            </Panel>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
