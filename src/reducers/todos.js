// @flow

type Todo = {
  id: string;
  text: string;
  completed: bool;
};

type AddTodoAction = {
  type: 'ADD_TODO';
  id: string;
  text: string;
};

type ToggleTodoAction = {
  type: 'TOGGLE_TODO';
  id: string;
};

type Action = AddTodoAction | ToggleTodoAction;

function createTodo(action: AddTodoAction): Todo {
  return {
    id: action.id,
    text: action.text,
    completed: false,
  };
}

const todo = (state: Todo, action: Action): Todo => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

const todos = (state: Array<Todo> = [], action: Action): Array<Todo> => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        createTodo(action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

export default todos;
