import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import SingleService from './SingleService';
// declaring a constant array to hold all of our services props.
// The following array is made up of the objects.

const services = [
    {
        title:'E-commerce',
        description:'Description text on E-commerce',
        icon: 'fa-shopping-cart'
    },
    {
        title:'Responsive Design',
        description:'Description text on Responsive Design',
        icon: 'fa-laptop'
    },
    {
        title:'Web Security',
        description:'Description text on Web Security',
        icon: 'fa-lock'
    }
];
class Services extends Component{
    render(){
        return(
            <div>
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row text-center">
          {/* it's looping through an object, that's why we've used key value pair. */}
          { /* 
            to write js inside JSX,  we use curly braces 
            here we're using array.map() function.
          */}
            {services.map((service, index) => {
              // returning our component with props.
              // return (<SingleService title={service.title} description={service.description} icon={service.icon} />);
              // or, we can write the following
              return (<SingleService {...service} key={index} />);
            })}
      </div>
    </div>
  </section>
            </div>
        );
    }
}
export default Services;