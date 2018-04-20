import React from 'react';
import ReactDOM from 'react-dom';
import * as cowsay from 'cowsay';
import {say} from 'cowsay';
import faker from 'faker';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'Generate Cowsay Lorem',
      content: say({
        text: 'hello',
        cow: cowsay.DRAGON
      }),
      cows: Object.keys(cowsay).map(cow => <option key={cow}>{cow}</option>),
      selectedCow: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.drawCow = this.drawCow.bind(this);
  };

  handleChange(e) {
    this.setState({selectedCow: e.target.value});
  }

  drawCow() {
    this.setState(state => {
      return {
        content: say({
          text: faker.hacker.phrase(),
          cow: cowsay[this.state.selectedCow]
        })
      }
    });
  }

  render() {
    return <div className="App">
        <h1>{this.state.heading}</h1>
        <select value={this.state.selectedCow} onChange={this.handleChange}>{this.state.cows}</select>
        <div id="cow"><pre>{this.state.content}</pre></div>
        <button onClick={this.drawCow} id="clickme">Click Me</button>
      </div>
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
