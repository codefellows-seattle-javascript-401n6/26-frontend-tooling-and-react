'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import faker from 'faker';
import {say} from 'cowsay';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Generate Cowsay Lorem',
      count: 0,
      content: 'foo'
    }
    this.updateCount = this.updateCount.bind(this);
    this.saySomething = this.saySomething.bind(this);
  }

  updateCount(){
    this.setState(state => {
      return {count: state.count + 1};
    });
  }

  saySomething() {
    this.setState({
      content:say({
        text: faker.lorem.word()
      })
    })
  }



  render() {
    return <div>
      <h1>{this.heading}</h1>
      <p onClick={this.updateCount}>Click Here</p>
      <p>Clicked {this.state.count} times!</p>
      <button onClick={this.saySomething}>Click Me!</button>
      <pre>{this.state.content}</pre>
      </div>
  }
};


const root = document.getElementById('root');
ReactDom.render(<App/>, root);
