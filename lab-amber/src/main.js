import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import {say} from 'cowsay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialCow: say({text: faker.hacker.phrase()})
    }
    // this.randomCow = this.randomCow.bind(this);
  }
  // randomCow() {
  //   this.setState(state => {
  //     let cowArt = cowsay.say({text: 'random comment'});
  //     return {cow: cowArt};
  //   });
  // }
  render() {
    return <div>
      <pre>{this.state.initialCow}</pre>
      </div>
  }
};

ReactDOM.render(<App />, document.getElementById('root'));