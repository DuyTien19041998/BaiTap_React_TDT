import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import './components/demoredux';
import { createStore ,applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {reducers} from './reducers';
// import axios from 'axios';
import thunk from 'redux-thunk';

const store = createStore(reducers , applyMiddleware(thunk));

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}> 
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
