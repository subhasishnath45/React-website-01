import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import AboutItem from './AboutItem';

import img1 from '../assets/img/about/1.jpg';
import img2 from '../assets/img/about/2.jpg';
import img3 from '../assets/img/about/3.jpg';
import img4 from '../assets/img/about/4.jpg';

const aboutsections = [
    {
        image:img1,
        year: "2009-2011",
        event: "Our Humble Beginnings",
        eventdescription: "We got started as a company.",
        class: 'timeline-inverted'
    },
    {
        image:img2,
        year: "March 2011",
        event: "An Agency is Born",
        eventdescription: "We were struggling as a company."
    },
    {
        image:img3,
        year: "December 2012",
        event: "Transition to Full Service",
        eventdescription: "We started providing all of the Development services.",
        class: 'timeline-inverted'
    },
    {
        image:img4,
        year: "July 2014",
        event: "Phase Two Expansion",
        eventdescription: "We started another branch in Canada."
    }
];

class Aboutsection extends Component{
    render(){
        return(
<section className="page-section" id="about">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">{this.props.aboutheading}</h2>
                        <h3 className="section-subheading text-muted">{this.props.aboutdescription}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <ul className="timeline">
                        {
                        aboutsections.map((aboutsection, index)=>{
                            return (<AboutItem {...aboutsection} key={index} />);
                        })
                        }

                            <li>
                                <div className="timeline-image">
                                    <h4>Be Part
                                    <br/>Of Our
                                    <br/>Story!</h4>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </section>
        );
    }
}
export default Aboutsection;