'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import './style.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Generate Cowsay Lorem',
      count: 0
    }
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount(){
    this.setState(state => {
      return {count: state.count + 1};
    });
  }

  render() {
    return <div className='App'>
      <h1>{this.heading}</h1>
      <p onClick={this.updateCount}>Click Here</p>
      <p>Clicked {this.state.count} times!</p>
      </div>;
  }
};

const root = document.getElementById('root');
ReactDom.render(<App/>, root);
