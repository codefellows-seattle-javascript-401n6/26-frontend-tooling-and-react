'use strict';
console.log('loading file');

import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.css';

class MyCoolApp extends React.Component { // MyCoolApp is the name of the app
  constructor(props){
    super(props);
    console.log('constructing');
    this.state = {
      name: 'My React App',
      count: 0
    }
    // make sure to bind the update count function
    // so the context of "this" is always this class.
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    console.log('paragraph clicked');
    this.setState(state => {
      return {count: state.count + 1};
    });
  }

  render() {
    return <div>
      <h1>this.state.name</h1>
      <p> 
        This is a page created with react
      </p>
      <p onClick={this.updateCount}>
        People have clicked on this paragraph {this.state.count} times.
      </p>
      </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<MyCoolApp/>, root);