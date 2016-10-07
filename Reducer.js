const INITIAL_STATE = {
  query: ''
}

const Reducer = function(state = INITIAL_STATE, action) {
  if (!action) return state;
  
  switch (action.type) {
    case 'SET_QUERY': {
      console.log('action', action)
      console.log('New Query:', action.query);
      return {
        query: action.query
      };
    }
  }
}

module.exports = Reducer;
