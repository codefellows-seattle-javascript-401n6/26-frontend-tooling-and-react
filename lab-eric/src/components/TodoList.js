import React from 'react';
import TodoForm from './TodoForm.js';
import TodoItem from './TodoItem.js';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        "buy milk",
        "feed cat"
      ]
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(text) {
    // copy the array
    let newTodos = this.state.todos.slice();
    // push on a new item to the copy
    newTodos.push(text);
    // set the state to the new array
    this.setState({todos: newTodos});
  }

  render() {
    return <div>
            <TodoForm addTodo={this.addTodo}></TodoForm>
            {this.state.todos.map(todo => {
              return <TodoItem text={todo}></TodoItem>
            })}
          </div>
  }
}

export default TodoList;