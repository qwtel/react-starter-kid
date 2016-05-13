// @flow

type State = string;
type Action = {type: string; filter: string};

const visibilityFilter = (state: State = 'SHOW_ALL', action: Action): State => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
