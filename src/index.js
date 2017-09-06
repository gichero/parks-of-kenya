import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.compose(
  Redux.applyMiddleware(ReduxThunk),
  autoRehydrate()
  )
);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
