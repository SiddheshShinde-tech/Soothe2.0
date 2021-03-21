import { Component } from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";

import HeroSection from "./components/Mainpage/HeroSection";
import PatientHomePage from "./components/PatientHomePage/PatientHomePage";
import FirstTest from '../src/components/Assessment/src/index-assessment'
import Treatement from '../src/components/Treatment/Treatement'
import Login from "../src/components/SignUp/Login";





function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HeroSection}></Route>
        <Route exact path="/login" component={PatientHomePage}></Route>
        <Route exact path="/assessment" component={FirstTest}></Route>
        <Route exact path="/signup" component={Login}></Route>
      </Router>
      
    </div>
  );
}

export default App;