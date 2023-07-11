const initialState = {
  count: 0,
  name: 'v',
  todo: [],
  User: []
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
      return state;
  }
};


export const NameReducer = (state = initialState, action) => {
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

export const todoReducer = (state = initialState, action) => {

  switch (action.type) {

    case "TODO":
      return {
        ...state, todo: [...state.todo, action.payload]
      }


    case "DELETE":
      return {
        ...state, todo: state.todo.filter((item) => item.Title !== action.payload)
      }


    case "UPDATE":
      return {
        ...state,
        todo: state.todo.map(item => {

          if (item.Title === action.payload.Title) {
            return {
              ...item,
              Title: action.payload.Title,
              Description: action.payload.Description
            };
          }
          return item;
        })
      };
    default:
      return state;
  }


}


export const ApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state, User: action.payload
      }

    case "DELETEAPI":
      return {
        ...state, User: state.User.filter((items)=>items.name !== action.payload)
      }

    default:
  }
  return state;

}

