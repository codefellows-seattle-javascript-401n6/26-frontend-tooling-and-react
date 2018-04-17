import React from 'react';
import ReactDOM from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'Cowsay!',
            cow: say({text: faker.hacker.phrase()})
        }
    }
    
    render() { 
        console.log(say({ text: 'grazing in the browser' }));
        return (<div>
            <h1>{this.state.header}</h1>
            <pre>{this.state.cow}</pre>
        </div>)
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);