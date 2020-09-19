'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.css';

console.log('css:', css);

class MyCoolApp extends React.Component {
  constructor(props) {
    console.log('constructing');
  }

  render(){
    console.log('rendering');
    return <div>
      <h1>My Cool App</h1>
      </div>
  }
}