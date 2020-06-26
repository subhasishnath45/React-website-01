import React, {Component} from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import image from '../assets/img/header-bg.jpg'

// re-useable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Teamsection from '../Common/Teamsection';
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
                <Teamsection teamheading="Meet our Team" teamdescription="We do our best to serve you." teamdescriptiontwo="We are ready to take on your project. Hire us now."/>
                <Footer/>
            </div>
        );
    }
}

export default Home;