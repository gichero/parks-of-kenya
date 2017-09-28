import React from 'react';
import * as ReactRedux from 'react-redux';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

class Contact extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div  className = 'contact'>
                <p>Amos Gichero</p>

            </div>
        )
    }

}

const ContactContainer = ReactRedux.connect(
    state => state.Contact,
)(Contact);
export default ContactContainer;
