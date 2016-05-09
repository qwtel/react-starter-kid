import React, { PropTypes } from 'react';
import { List, is } from 'immutable';

import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        todo={todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

TodoList.shouldComponentUpdate = (nextProps) => (
  !is(this.todos, newProps.todos)
);

export default TodoList;
