import React from 'react';
import * as ReactRedux from 'react-redux';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import * as actions from './homePage.actions';

class homePage extends React.Component{
    componentDidMount(){
        this.props.userInfo()
    }
    render(){

        display = (
            <div className = "navbar">
                <p key ="about"><Link to="/about">About</Link></p>
                <p key ="login"><Link to='/parksReserves'>Parks and Reserves</Link></p>
                <p key ="login"><Link to='/contact'>Contact</Link></p>
            </div>
        )

        return(
            <div  className = 'page'>
                <h3>About</h3>
                <h3>Parks and Reserves</h3>
                <h3>Contact</h3>
            </div>
        )
    }
}

const HomePageContainer = ReactRedux.connect(
    state => state.HomePage,
    actions
)(HomePage);
export default HomePageContainer;
