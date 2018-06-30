import React from 'react';
import React from 'react-dom';
import './style.css';
import faker from 'faker';
import {say} from 'cowsay';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "Generate Cowsay Lorem",
      content : say({text : faker.lorem.sentence()})
    }
  }

  render(){
      return <div>
        <h1>CowApp</h>
        </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);

