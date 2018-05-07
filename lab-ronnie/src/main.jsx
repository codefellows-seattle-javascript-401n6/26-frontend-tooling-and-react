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
        text: faker.lorem.sentence()
      }),
      heading: 'Generate Cowsay Lorem'
    }

    this.newText = this.newText.bind(this);
  }

  newText() {
    this.setState({
      content: say({
        text: faker.lorem.sentence()
      })
    })
  }
  render() {
    return <div className="App">
      <h1>{this.state.heading}</h1>
      <h2><button onClick={this.newText}>click me</button></h2>
      <pre>{this.state.content}</pre>
    </div>
  }
};

ReactDOM.render(<App />, document.getElementById('root'));