import React from 'react';
import * as ReactRedux from 'react-redux';
//import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import * as actions from './parksDetail.actions';

class ParksDetail extends React.Component{


    render(){

        return(
            <div>

            </div>
        )
    }

}

const ParksDetailContainer = ReactRedux.connect(
    state => state.ParksDetail,
)(ParksDetail);
export default ParksDetailContainer;
