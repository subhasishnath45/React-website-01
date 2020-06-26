import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about-us.jpg';

import Aboutsection from '../Common/Aboutsection';
class About extends Component{
    render(){
        return(
            <div>
                <Header
                    title="Welcome To Our About Page!!!!"
                    subtitle="We do our best"
                    showButton={true}
                    buttonText="Tell Me More... about"
                    image={image}
                />
                <Aboutsection/>
            </div>

        );
    }
}
export default About;