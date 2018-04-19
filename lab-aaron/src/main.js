import React from 'react';
import ReactDOM from 'react-dom';
// import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'My React App!',
    }
  }

  render() {//MUST use className to avoid conflicts between javascript and HTML
    return <div className='App'>
      <h1>{this.heading}</h1>
    </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
//ReactDOM.render(<App/>, document.getElementById('root'));