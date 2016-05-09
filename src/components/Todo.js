import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    <input
      type="checkbox"
      checked={completed}
      onChange={onClick}
    />
    {' '}
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
