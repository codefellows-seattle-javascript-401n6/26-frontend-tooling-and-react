import React from 'react';
import TodoItem from './TodoItem.js';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: 'take out trash'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({userInput: ev.target.value});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.addTodo(this.state.userInput);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.userInput}
                onChange={this.handleChange} />
              <button type="submit" onClick={this.addTodo}>Click Me</button>
          </form>
  }
}


export default TodoList;