'use strict';

import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import { say, DEFAULT, SQUIRREL, MOOSE, REN, SHEEP, BUNNY, DRAGON } from 'cowsay';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='main_header'>
      <h1>Welcome to Cowsay!</h1>
      </header>
    );
  }
}

let test = [{val: DEFAULT, name: 'select'},{val:SQUIRREL, name: 'SQUIRREL'}, {val: MOOSE, name: 'MOOSE'}, {val: REN, name: 'REN'}, {val: SHEEP, name: 'SHEEP'}, {val: BUNNY, name: 'BUNNY'}, {val:DRAGON, name: 'DRAGON'}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Generate Cowsay Lorem",
      content: '',
      value: 'select',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleClick() {
    this.setState((state) =>
      ({content: say({
        text: faker.hacker.phrase(),
        cow: `${this.state.value}`,
      })}));
  }

  render() {
    return (
    <div className='app'>
      <NavBar />
        <label className='label'>Pick your favorite Animal:</label>
        <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
        {test.map(option => {
            return <option value={option.val} key={option.name}>{option.name}</option>;
          })}
        </select>
      <button onClick={this.handleClick}>Click ME!</button>
      <pre>{`${this.state.content}`}</pre>
    </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);