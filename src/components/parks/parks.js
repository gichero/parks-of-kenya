import React from 'react';
import * as ReactRedux from 'react-redux';
//import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import * as actions from './parks.actions';

class Parks extends React.Component{

    componentDidMount(){
        this.props.fetchImage();
    }
    
    render(){

        return(
            <div>

            </div>
        )
    }

}

const ParksContainer = ReactRedux.connect(
    state => state.Parks,
)(Parks);
export default ParksContainer;
