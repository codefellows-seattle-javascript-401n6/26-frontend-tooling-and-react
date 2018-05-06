import React from 'react';
import ReactDOM from 'react-dom';
//import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'my React apppppp',
    }
  }
  render() {
    return <div className="App">
      <h1>{this.state.heading}</h1>
    </div>
  }
};

ReactDOM.render(<App />, document.getElementById('root'));