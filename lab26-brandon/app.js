import React from 'react';
import ReactDOM from 'react-dom';
// import './style.css'

class App extends React.Component {
 constructor(props) {
 super(props);
 }

 render() {
 return <div>
 <h1>My React App</h1>
 </div>;
 }
}
const root = document.getElementById('root');
ReactDOM.render(<App/>, root);