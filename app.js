'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

class App extends React.Component {
  constructor(props){
    super(props);
  
    }

  render() {
    return <div>
      <h1>Generate Cowsay Lorem</h1>
      </div>;
  }
}

const root = document.getElementById('root');
ReactDom.render(<App/>, root);
