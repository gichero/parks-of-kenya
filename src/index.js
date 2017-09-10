import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';


// const store = Redux.createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   Redux.compose(
//   Redux.applyMiddleware(ReduxThunk),
//   autoRehydrate()
//   )
// );

// persistStore(store);

class AppLayout extends React.Component {
    render(){
        return(
            <div>
                <h1>Kenya Parks reloaded</h1>
            </div>

        )
    }
}



ReactDOM.render(

        <Router history={hashHistory}>
            <Route path = "/" component={AppLayout}>

            </Route>
        </Router>,

     document.getElementById('root'));
registerServiceWorker();
