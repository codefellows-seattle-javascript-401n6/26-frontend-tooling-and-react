import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'My React app',
    }
  }
  render() {
    return <div className="App">
      <h1>{this.state.heading}</h1>
      </div>
  }
};

ReactDOM.render(<App />, document.getElementById('root'));