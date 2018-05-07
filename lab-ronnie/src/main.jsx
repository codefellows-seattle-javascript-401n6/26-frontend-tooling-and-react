import React from 'react';
import ReactDOM from 'react-dom';
import * as cowsay from 'cowsay';
import {say} from 'cowsay';
import faker from 'faker';
//import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: say({
        text: faker.lorem.sentence(),
        cow: cowsay.MILK
    }),
      heading: 'Generate Cowsay Lorem',
      cows: Object.keys(cowsay).map(function(cow){
        return <option key={cow}>{cow}</option>
      }),

      selectedCow: '',

    }

    this.newText = this.newText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      selectedCow: event.target.value
    })
  }

  newText() {
    this.setState({
      content: say({
        text: faker.lorem.sentence(),
        cow: cowsay[this.state.selectedCow]
      })
    })
  }
  render() {
    return <div className="App">
      <h1>{this.state.heading}</h1>
      <h2><button onClick={this.newText}>click me</button></h2>
      <pre>{this.state.content}</pre>
      <select value="" onChange={this.handleChange}>{this.state.cows}</select>
    </div>
  }
};

ReactDOM.render(<App />, document.getElementById('root'));