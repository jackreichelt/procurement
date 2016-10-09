const INITIAL_STATE = {
  query: '',
  index: '',
}

const Reducer = function(state = INITIAL_STATE, action) {
  if (!action) return state;
  
  switch (action.type) {
    case 'SET_QUERY': {
      console.log('action', action)
      console.log('New Query:', action.payload.query);
      console.log('New Index:', action.payload.index)
      return {
        query: action.payload.query,
        index: action.payload.index,
      };
    }
  }
}

module.exports = Reducer;
