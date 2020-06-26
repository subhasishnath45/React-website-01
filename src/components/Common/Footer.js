import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <span className="copyright">Copyright &copy; Your Website 2019</span>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-inline quicklinks">
                    <li className="list-inline-item">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </footer>
        
        );
    }
}
export default Footer;