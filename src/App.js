import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageWrapper from './components/PageWrapper';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';


class App extends Component {
  render(){
    return(
      <Router>
      <PageWrapper>
          <Route 
            path="/home"
            component={Home}
          />
          <Route 
            path="/about"
            component={About}
          />
          {/* <Route
          path="/a"
          render={()=>{
            return(
              <h1>I'm the /a route</h1>
            )
          }}
          />
          <Route
          path="/ab"
          render={()=>{
            return(
              <h1>I'm the /ab route</h1>
            )
          }}
          />
          <Route
          path="/abc"
          render={()=>{
            return(
              <h1>I'm the /abc route</h1>
            )
          }}
          />
          <Route
          path="/abcd"
          render={()=>{
            return(
              <h1>I'm the /abcd route</h1>
            )
          }}
          /> */}

      </PageWrapper>
      </Router>
    );
  }
}

export default App;
