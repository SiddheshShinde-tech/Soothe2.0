import {Component} from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";

import HeroSection from "./components/Mainpage/HeroSection";
import PatientHomePage from "./components/PatientHomePage/PatientHomePage";
import FirstTest from "../src/components/Assessment/src/index-assessment";
import Treatement from "../src/components/Treatment/Treatement";
import Login from "../src/components/SignUp/Login";
import Therapy from "../src/components/ExplorePages/Therapies/Therapy";
import Post from "../src/components/ExplorePages/Blogs/BlogMain";
import Doctors from "../src/components/ExplorePages/Doctors/doctors";
import SelfTrack from "../src/components/ExplorePages/Self Tracking/welcome";
import TypeOfDisorder from "../src/components/ExplorePages/Self Tracking/disorderType";
import LevelAnxiety from "../src/components/ExplorePages/Self Tracking/level";
import Challenge from "../src/components/ExplorePages/Self Tracking/challenge";
import Reward from "../src/components/ExplorePages/Self Tracking/reward";
import CheckBack from "../src/components/ExplorePages/Self Tracking/checkback";
import Objective from "../src/components/ExplorePages/Self Tracking/objective";
import ShowDown from "../src/components/ExplorePages/Self Tracking/final";
import Employees from "../src/components/SignUp/Volunteer Form/Employee";
import Patients from "../src/components/SignUp/Patient Form/Patient";
import Final from "../src/components/ChatSystem/Final";
import VolunteerHomePage from "../src/components/VolunteerHomePage/VolunteerHomepage";




function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HeroSection}></Route>
        <Route exact path="/login" component={PatientHomePage}></Route>
        <Route exact path="/assessment" component={FirstTest}></Route>
        <Route exact path="/signup" component={Login}></Route>
        <Route exact path="/explore" component={Treatement}></Route>
        <Route exact path="/therapy" component={Therapy}></Route>
        <Route exact path="/doctors" component={Doctors}></Route>
        <Route exact path="/selfTracking" component={SelfTrack}></Route>
        <Route path="/post/:postId" component={Post} />

        <Route path="/selectoption" component={TypeOfDisorder}></Route>
        <Route path="/Anxious" component={LevelAnxiety}></Route>
        <Route path="/Challenge" component={Challenge}></Route>
        <Route path="/Reward" component={Reward}></Route>
        <Route path="/CheckBack" component={CheckBack}></Route>
        <Route path="/Letsdoit" component={Objective}></Route>
        <Route path="/Showdown" component={ShowDown}></Route>
        <Route path="/Volunteer" component={Employees}></Route>

        {/* Chat System Located here */}
        <Route path="/Chat" component={Final}></Route>
        {/* Chat System Located here */}

        <Route path="/VolunteerHomePage" component={VolunteerHomePage}></Route>
        <Route path="/Patient" component={Patients}></Route>
      </Router>
    </div>
  );
}

export default App;
