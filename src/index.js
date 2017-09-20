import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import HomePageContainer from './components/homePage/homePage.js';
import AboutContainer from './components/about/about.js';

const reducer = Redux.combineReducers({
    HomePage: null,
    About: null
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.compose(
  Redux.applyMiddleware(ReduxThunk),
  autoRehydrate()
  )
);

persistStore(store);

class AppLayout extends React.Component {
    render(){

        return(
            <div>
                <h4><IndexLink to="/" activeClassName="active">Home</IndexLink></h4>
                <div  className = 'navbar'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <Router history={hashHistory}>
            <Route path = "/" component={AppLayout}>
            <IndexRoute component={HomePageContainer}/>
            <Route path="/about" component={AboutContainer}/>
            </Route>
        </Router>
    </ReactRedux.Provider>,
     document.getElementById('root'));
registerServiceWorker();
