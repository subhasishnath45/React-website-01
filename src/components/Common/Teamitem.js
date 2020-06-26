import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Teamitem extends Component{

    render(){
        return(
            <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={this.props.image} alt=""/>
                <h4>{this.props.membername}</h4>
                <p className="text-muted">{this.props.memberrole}</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href={this.props.twitterurl}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={this.props.fburl}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={this.props.lnurl}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
    }

}
export default Teamitem;