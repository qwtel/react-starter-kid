import { List, Record } from 'immutable';

const Todo = Record({
  id: undefined,
  text: '',
  completed: false,
});

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return new Todo({
        id: action.id,
        text: action.text,
      });
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return state.merge({
        completed: !state.completed,
      });
    default:
      return state;
  }
};

const todos = (state = List(), action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.push(todo(undefined, action));
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;
