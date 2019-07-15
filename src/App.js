import React from 'react';
import { Provider } from 'react-redux'
import Dashboard from './components/Dashboard';
import {
  createStore,
  applyMiddleware  
} from 'redux';
import thunk from 'redux-thunk';
import fetchingData from './reducers/searchedLocationReducer';
const middleware = [thunk];
const store = createStore(fetchingData);
store.subscribe(() => console.log('Redux!!'))

export class App extends React.Component{
  render(){
  return (
    <Provider store={store}>
      <div>
        <Dashboard />
      </div>
    </Provider>
  );
  }
}
export default App;
