'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import './style/main.scss';
import * as cowsay from 'cowsay';

const root = document.getElementById('root');


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className='main_header'>
        <h1>This is CowSay!</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        content: "Click the button",
        selectValue: "" 
    }
    this.randomComment = this.randomComment.bind(this);
    this.newCow = this.newCow.bind(this);
  }
  randomComment() {
    console.log('inside random comment');
    this.setState({
      content: cowsay.say({
        cow: this.state.selectValue,
        text: faker.hacker.phrase()
      })
    })
  }


  newCow(e) {
    console.log('inside random newcow');
    let newComment = faker.hacker.phrase();
    if (event.target.value === '') {
      
      this.setState({
        selectValue: ''
      });
      // return {
      //   content:({
      //     cow: say,
      //     text: newComment
      //   })
      // };
    }
    if (event.target.value === 'DEFAULT') {
      this.setState({
        selectValue: 'DEFAULT'
      });
      // return {
      //   content: think({
      //     cow: DEFAULT,
      //     text: newComment
      //   })
      // };
    }
    if (event.target.value === 'KOSH') {
      this.setState({
        selectValue: cowsay.KOSH
      });
    }

    if (this.state.selectValue = 'DRAGON') {
      this.state.selectValue = DRAGON;
      return {
        content: think({
          cow: DRAGON,
          text: newComment
        })
      };
      if (this.state.selectValue = 'TUX') {
        this.state.selectValue = TUX;
        return {
          content: think({
            cow: TUX,
            text: newComment
          })
        };
      }
    }
  }


  // handleClick() {
  //   this.setState((state) =>
  //     ({
  //       content: say({
  //         text: faker.hacker.phrase(),
  //         cow: `${this.state.value}`,
  //       })
  //     }));
  // }

  render() {
    return <div className='app'>
      <NavBar />
      <label className='label'>Choose your buddy:</label>
      <select value={this.state.selectValue} onChange={this.newCow}>
        <option value="">Select Cow</option>
        <option value="say">Say</option>
        <option value="Default">Default</option>
        <option value="KOSH">Kosh</option>
        <option value="DRAGON">Dragon</option>
        <option value="TUX">tux</option>
      </select>
      <button onClick={this.randomComment}>Click Here!</button>
      <pre>{this.state.content}</pre>
    </div >
  }
};


ReactDOM.render(<App />, root);