import React, { Component } from 'react';

import CenteredSlide from '../CenteredSlide/CenteredSlide';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

import './Slide16.css';

class Slide16 extends Component {
  render() {
    return (
      <div className="Slide16 slide">
        <CenteredSlide>
            <TodoForm
                addTodo={this.props.addTodo}
            />
            <TodoList
                todoList={this.props.todoReducer.todoList}
                toggleTodo={this.props.toggleTodo}
                deleteTodo={this.props.deleteTodo}
            />
        </CenteredSlide>
      </div>
    );
  }
}

export default Slide16;