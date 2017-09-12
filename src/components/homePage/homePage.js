import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './homePage.actions';

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div  className = 'navbar'>
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
