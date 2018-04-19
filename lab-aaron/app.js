import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import faker from 'faker';
import {say} from 'cowsay';//object destructuring (dont want to get EVERYTHING, but only the one thing that pertains to what I need)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Cowsay Lorem Ipsum-FOO!',
      stuff: []
    }
    this.saySomething = this.saySomething.bind(this);
  }

  saySomething() {//is a method of the App class so it doesn't need FUNCTION written in front of it
    this.setState({
      content: say({
        text: faker.lorem.word()
      })
    })
  }

  render() {//MUST use className to avoid conflicts between javascript and HTML
    return <div className="Cowsay">
      <h1>Cowsay Lorem Ipsum</h1>
      <button onClick={}>Click Me</button>
      <pre>{this.state.content}</pre>
    </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);