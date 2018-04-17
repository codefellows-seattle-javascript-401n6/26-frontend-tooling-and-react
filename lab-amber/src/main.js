import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import {say} from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'Generate Cowsay Lorem',
      content: say({text: faker.hacker.phrase()})
    }
    this.randomComment = this.randomComment.bind(this);
  }

  randomComment() {
    this.setState(state => {
      let newComment = faker.hacker.phrase();
      console.log('new comment', newComment);
      return {content: say({text: newComment})};
    });
  }

  render() {
    return <div>
      <h1>{this.state.heading}</h1>
      <button onClick={this.randomComment}>Click Me</button>
      <pre>{this.state.content}</pre>
      </div>
  }
};

ReactDOM.render(<App />, document.getElementById('root'));