'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import faker from 'faker';
import {say} from 'cowsay';

class MyCoolApp extends React.Component { // MyCoolApp is the name of the app
  constructor(props){
    super(props);
    this.state = {
      content: 'Welcome to Apple technical support!',
      stuff: []
    }
    this.saySomething = this.saySomething.bind(this);
  }

  saySomething() {
    this.setState({
      content: say({
        text: faker.hacker.phrase()
        // text: faker.lorem.sentence()
      })
    })
  }

  render() { // JSX
    return <div>
      <h1>Genderate Cowsay Apple Technical Support</h1>
      <button onClick={this.saySomething}>click me</button>
      <pre>{this.state.content}</pre>
      </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<MyCoolApp/>, root); // Class and render need to be the same.