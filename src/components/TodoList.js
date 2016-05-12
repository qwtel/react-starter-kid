import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';

import Todo from './Todo';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        todo={todo}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
  // onTodoClick: PropTypes.func.isRequired,
};

export default immutableRenderDecorator(TodoList);
