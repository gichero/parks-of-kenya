import React from 'react';
import * as ReactRedux from 'react-redux';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

class About extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div  className = 'about'>
                <p>kgjgljlj</p>
            </div>
        )
    }

}

const AboutContainer = ReactRedux.connect(
    state => state.About,
)(About);
export default AboutContainer;
