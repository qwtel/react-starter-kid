// @flow

import React, { PropTypes } from 'react';

import Todo from './Todo';

type PropsType = {
  todos: Array<{
    id: string;
    text: string;
    completed: boolean;
  }>;
  onTodoClick: any;
};

const TodoList = ({ todos, onTodoClick }: PropsType) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
