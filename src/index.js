import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import Thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import rootReducer from './rootReducer'



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
)
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


