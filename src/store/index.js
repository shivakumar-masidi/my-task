import {
    createStore,
    applyMiddleware  
  } from 'redux';
  import thunk from 'redux-thunk';
  import fetchingData from '../reducers/fetchingDataReducer';
  const middleware = [thunk]

  export default createStore(
    fetchingData,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
  )
  