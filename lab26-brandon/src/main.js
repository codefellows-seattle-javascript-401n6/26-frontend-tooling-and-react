import React from 'react';
import ReactDOM from 'react-dom';
import './src/style/style.css';
import faker from 'faker';
import {say} from 'cowsay';

class App extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
     heading: 'Generate Cowsay Lorem',
     content : '',
 }
 }

 render() {
   return <div>
      <h1>{this.state.name}</h1>
   </div>;
 }
};
const root = document.getElementById('root');
ReactDOM.render(<App/>, root);