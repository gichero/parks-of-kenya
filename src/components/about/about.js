import React from 'react';
import * as ReactRedux from 'react-redux';
import {Link} from 'react-router';

class About extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div  className = 'about'>
                <p> Bacon ipsum dolor amet kevin chicken biltong filet mignon pastrami landjaeger tenderloin turkey meatloaf doner jerky. Strip steak salami bresaola shank. Pastrami cupim sirloin bresaola beef tail pork chop cow leberkas fatback strip steak sausage spare ribs. Short loin bacon porchetta landjaeger ribeye. </p>
            </div>
        )
    }

}

const AboutContainer = ReactRedux.connect(
    state => state.About,
)(About);
export default AboutContainer;
