import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
 constructor(props) {
 super(props);
 this.state = {
     name: "My React App"
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