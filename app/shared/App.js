import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import "antd/dist/antd.css";
import Routes from "../routes";

import "./app.css";

import Header from '../Header/Header';
import Footer from '../Others/Footer';


function isAuthenticated(){
  return false;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }



  
  render() {
    return (
      <div className="">
        <Routes />
      </div>
    );
  }
}

export default App;
