import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import faker from 'faker';
import {say} from 'cowsay';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'something',
            stuff: []
        }
        this.saySomething = this.saySomething.bind(this);
    }

    saySomething() {
        this.setState({
            content: 'something else',
            text: faker.lorem.word
        })
    }

    render() {
        return <div>
        <h1>Cowsay Lorem Ipsum</h1>
        <button onClick={this.saySomething}>Click Here</button>
        <pre>{this.state.content}</pre>
        </div>
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);