const initialState = {
  count: 0,
  name:'v',
};

export const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state ;
  }
};


export const NameReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'VIJAY':
      return {
        ...state,
        name: 'vijay'
      };

    case 'AJAI':
      return {
        ...state,
        name: 'ajai'
      };

    default:
      return state;
  }


}