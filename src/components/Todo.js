import React, { PropTypes } from 'react';
import { Collection, is } from 'immutable';

const Todo = ({ onClick, todo: {completed, text} }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {console.log("render")}
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
  todo: PropTypes.instanceOf(Collection),
  onClick: PropTypes.func.isRequired,
};

Todo.shouldComponentUpdate = (nextProps) => {
  console.log(this.todo);
  !is(this.todo, newProps.todo)
};

export default Todo;
