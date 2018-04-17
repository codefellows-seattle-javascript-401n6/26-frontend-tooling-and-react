import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import {say} from 'cowsay';
import { think, SQUIRREL } from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'Generate Cowsay Lorem',
      selectValue: '',
      content: say({
        cow: this.selectValue,
        text: faker.hacker.phrase()
      })
    }
    this.randomComment = this.randomComment.bind(this);
    this.newCow = this.newCow.bind(this);
  }

  randomComment() {
    this.setState(state => {
      let newComment = faker.hacker.phrase();
      return {content: say({
        cow: this.state.selectValue,
        text: newComment
      })};
    });
  }

  newCow(e) {
    console.log('target value', e.target.value);
    let newComment = faker.hacker.phrase();
    if (this.state.selectValue = 'squirrel') {
      this.state.selectValue = SQUIRREL;
      return {content: think({
        cow: SQUIRREL,
        text: newComment
      })};
    }
  }

  render() {
    return <div>
      <h1>{this.state.heading}</h1>
      <select value={this.state.selectValue} onChange={this.newCow}>
        <option value="">Select Cow</option>
        <option value="squirrel">Squirrel</option>
      </select>
      <button onClick={this.randomComment}>Click Me</button>
      <pre>{this.state.content}</pre>
      </div>
  }
};

ReactDOM.render(<App />, document.getElementById('root'));