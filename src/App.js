import './App.css';
import Increment from "./Components/Increment";
import { legacy_createStore as createStore ,combineReducers,applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import { NameReducer, incrementReducer,todoReducer,ApiReducer } from "./Reducers/Reducer";
import Todo from './Components/Todo';
import thunk from 'redux-thunk';
import User from './Components/User';

const root = combineReducers({
   incrementReducer,
   NameReducer,
   todoReducer,
   ApiReducer,
})

const store = createStore(root,applyMiddleware(thunk))



function App() {

   return (
    <div className='App'>
      <Provider store={store}>
        <Increment />
        <Todo/>
        <User/>
        
      </Provider>
    </div>



  );
}

export default App;
