const INITIAL_STATE = {
  query: ''
}

const Reducer = function(state = INITIAL_STATE, action) {
  if (!action) return state;
  
  switch (action.type) {
    case 'SET_QUERY': {
      console.log('New Query:', action.payload);
      return {
        query: action.payload
      };
    }
  }
}

module.exports = Reducer;
