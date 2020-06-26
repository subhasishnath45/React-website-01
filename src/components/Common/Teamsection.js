import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Teamitem from './Teamitem';

import img1 from '../assets/img/team/1.jpg';
import img2 from '../assets/img/team/2.jpg';
import img3 from '../assets/img/team/3.jpg';

const teammembers = [
    {
        image:img1,
        membername: "Subhasish Nath",
        memberrole:"Lead Developer",
        twitterurl:"https://twitter.com/subhasishnath45",
        fburl:"https://www.facebook.com/subhasish.nath.7524",
        lnurl:'https://www.linkedin.com/in/subhasish-nath-8300989a/'
    },
    {
        image:img1,
        membername: "Subhasish Nath",
        memberrole:"Lead Developer",
        twitterurl:"https://twitter.com/subhasishnath45",
        fburl:"https://www.facebook.com/subhasish.nath.7524",
        lnurl:'https://www.linkedin.com/in/subhasish-nath-8300989a/'
    },
    {
        image:img1,
        membername: "Subhasish Nath",
        memberrole:"Lead Developer",
        twitterurl:"https://twitter.com/subhasishnath45",
        fburl:"https://www.facebook.com/subhasish.nath.7524",
        lnurl:'https://www.linkedin.com/in/subhasish-nath-8300989a/'
    }
];

class Teamsection extends Component{

    render(){
        return(
            <section className="bg-light page-section" id="team">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">{this.props.teamheading}</h2>
        <h3 className="section-subheading text-muted">{this.props.teamdescription}</h3>
                </div>
              </div>
              <div className="row">
                {
                    teammembers.map((teammember, index)=>{
                        return (<Teamitem {...teammember} key={index} />);
                    })
                }
              </div>
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
        <p className="large text-muted">{this.props.teamdescriptiontwo}</p>
                </div>
              </div>
            </div>
          </section>
        );
    }

}
export default Teamsection;