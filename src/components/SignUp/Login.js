import React, { Component,useState } from "react";
import firebase from "../../firebase";
import { signInWithGoogle } from "../../firebase";
import { auth } from "../../firebase";
import ButtonBases from "../SignUp/option";
import HeroSection from "../Mainpage/HeroSection";

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
var flag;

  function authenticateUser()
  {
    console.log("User authentication");
    firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;

      // this is what you need
      var isNewUser = result.additionalUserInfo.isNewUser;
      if (isNewUser) {
        //delete the created user
        console.log("New user");

        // result.user.delete();

        // display two buttons 1. Volunteer 2. Patient
        
        flag=true;

        // ask the user to fill login form according to the preferences

      } else {
        // your sign in flow
        console.log("user " + user.email + " does exist!");
        flag=false;
        
  
        // Redirect to respective portal then 
        
        
          
      }
    });

  }





// refresh token
class Login extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <div className="user-info">
        {(flag)?<ButtonBases/>:<HeroSection/>}
        </div> 
    );
  }
}

export default Login;
export {authenticateUser};
