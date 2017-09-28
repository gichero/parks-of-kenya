import React from 'react';
import * as ReactRedux from 'react-redux';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        let display = (
        <div  className = 'navbar'>
            <h3 key = 'about'><Link to = '/about'>About</Link></h3>
            <h3 key = 'parks'><Link to = '/parks'>Parks and Reserves</Link></h3>
            <h3 key = 'contact'><Link to = '/contact'>Contact</Link></h3>
        </div>
    )
        return(

        )
    }

}

const HomePageContainer = ReactRedux.connect(
    state => state.HomePage,
)(HomePage);
export default HomePageContainer;
