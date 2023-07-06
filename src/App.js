import './App.css';
import Increment from "./Components/Increment";
import { legacy_createStore as createStore ,combineReducers} from "redux";
import { Provider } from 'react-redux';
import { NameReducer, incrementReducer, } from "./Reducers/Reducer";

const root = combineReducers({
   incrementReducer,
   NameReducer
})

const store = createStore(root)



function App() {

  

  

  return (
    <div className='App'>
      <Provider store={store}>
        <Increment />
      </Provider>
    </div>



  );
}

export default App;
