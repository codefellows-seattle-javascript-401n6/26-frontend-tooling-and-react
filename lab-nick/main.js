'use strict';
console.log('loading file');

import React from 'react';
import ReactDOM from 'react-dom';

class MyCoolApp extends React.Component {
  constructor(props){
    super(props);
    console.log('constructing');
  }

  render() {
    return (<div>
      <h1>My Cool App</h1>
      </div>)
  }
}

const root = document.getElementById('root');
ReactDOM.render(<MyCoolApp/>, root);