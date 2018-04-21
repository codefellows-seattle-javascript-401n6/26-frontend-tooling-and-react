

import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import faker from 'faker';
import {say} from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'foo'
    }
    this.saySomething = this.saySomething.bind(this);
  }

  saySomething(){
    this.setState({
      content: say({
        text: faker.lorem.word()
      })
    })
  }

  render() {
    return <div>
      <h1>Cowsay Lorem</h1>
      <button onClick={this.saySomething}>Click Me</button>
      <pre>{this.state.content}</pre>
    </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);