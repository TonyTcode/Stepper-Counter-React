import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }

  }
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {

    return(
      <div className="counter">
        <button className="minus" onClick={this.decreaseCounter}> - </button>
        <h1>{this.state.counter}</h1>
        <button className="plus" onClick={this.incrementCounter}> + </button>
      </div>
    )
  }
}



export default App;
