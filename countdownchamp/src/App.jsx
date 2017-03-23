import React, { Component } from 'react';
import './App.css';
import Clock from './Clock'
import {Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      deadline: 'January 15, 2020',
      newDeadLine: ''
    }
  }

  changeDeadLine() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Coutdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
        <div>
          <Form inline>
            <FormControl
                className="Deadline-input"
                placeholder='new date'
                onChange={event => this.setState({newDeadline: event.target.value})}
             />
            <Button onClick={() => this.changeDeadLine()}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default App;
