console.log('loading file');

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructing');
    }

    render() {
        console.log('rendering');
        return <div>
        <h1>My App</h1>
        </div>
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);