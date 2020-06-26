import React, {Component} from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import image from '../assets/img/header-bg.jpg'

// re-useable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';

import Aboutsection from '../Common/Aboutsection';

class Home extends Component{

    render(){
        return(
            <div>
                <Header
                    title="Welcome To Our Studio!!!!"
                    subtitle="IT'S NICE TO MEET YOU"
                    showButton={true}
                    buttonText="Tell Me More... home"
                    image={image}
                />
                <Services/>
                <Portfolio/>
                <Aboutsection aboutheading="About Us" aboutdescription="Thanks for exploring our company, we are here to serve you."/>
                <Footer/>
            </div>
        );
    }
}

export default Home;