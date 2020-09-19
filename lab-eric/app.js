import React from 'react';
import ReactDOM from 'react-dom';
import './src/style/style.css';
import ClickCounter from './src/components/ClickCounter.js';
import TodoList from './src/components/TodoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
            <h1>The Todo list</h1>
            <ClickCounter></ClickCounter>
            <TodoList></TodoList>
          </div>
  }
}

const root = document.createElement('root');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);