import React, { PropTypes } from 'react';
import { Collection } from 'immutable';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';

const Todo = ({ todo: { completed, text } }, { onClick }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {console.log(text)}
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
};

Text.contextTypes = {
  onClick: PropTypes.func.isRequired,
};

export default immutableRenderDecorator(Todo);
