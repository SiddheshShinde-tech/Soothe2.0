import React, { Component,useState } from 'react'
import halflogo from '../../assets/halflogo.jpeg'
import fulllogo from '../../assets/fullLogo.jpeg'
import './volunteerhomepage.css'
import avatar from '../../assets/avatar.png'

import doctoravatar from '../../assets/doctoravatar.jpg'
import chat from '../../assets/chat_icon.gif'
import logOut from "../SignUp/Login";
import {db} from "../../firebase";
import firebase from "../../firebase";
import { auth } from "../../firebase";



class VolunteerHomapage extends Component {
 state = {
   volunteers:null,
 }

 componentDidMount()
 {
  db.collection('volunteers').get().then((snapshot) => {
    console.log(firebase.auth().currentUser.email);
    var currentEmail = firebase.auth().currentUser.email;
    const volunteers = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      console.log(data.name); 
      console.log("data.email "+data.email); 
      if(doc.data().email == currentEmail)
      {
        console.log("We are in");
        console.log(doc.data().name);
        volunteers.push(data);
      } 
      
    })
    this.setState({volunteers:volunteers})
  });
 }

 render() {
  return(
   <div className="volunteerhomepage">
    <div class="relative overflow-hidden" id="volunteer-navbar">
      <div>
        <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-5 ">
  

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img class="h-8 w-auto sm:h-10" src={fulllogo} id="navbar-logo"></img>
                </a>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">

              <a href="#" class="font-medium text-green-100 hover:text-gray-900" id="navbar-links">Home</a>

              <a href="#" class="font-medium text-green-100 hover:text-gray-900" id="navbar-links">About</a>

              <a href="#" class="font-medium text-green-100 hover:text-gray-900" id="navbar-links">Features</a>

              <a onClick={logOut} href="" class="font-medium text-green-300 hover:text-#green-500" id="navbar-links">Log Out</a>
            </div>
          </nav>
        </div>  
      </div>
    </div>
  </div>









<div className="volunteer-main-div">
  <div className="volunteer-subdiv-1">
    <div className="volunteer-subdiv-1-head">
      <img className="volunteer-img" src={doctoravatar}></img>
      {/* <p className="volunteer-name">Ananya Tripathi</p> */}
      <div>
      {
        this.state.volunteers && this.state.volunteers.map(volunteer => {
          return(
            <div>
            <p className="volunteer-name">{volunteer.name}</p>
            </div>
          )
        })
      }
      </div>
    </div>



    <div volunteer-subdiv-1-body>
      <p className="volunteer-quote">Selfless giving is the art of living</p>
      <p className="new-req-head">New Requests</p>

    <div className="volunteer-cards-div">

      
      <div className="new-req-card">
        <div className="new-req-img-div">
          <img className="new-req-img" src={avatar}></img>
        </div>
        <div className="new-req-content">
          <p className="new-req-name">Shikha Singh, 18, F</p>
          <p className="new-req-ill">Suicidal Thoughts, Anxiety</p>
          <div className="new-req-btns">
            <a className="new-req-btn-1" href="#">Accept</a>
            <a className="new-req-btn-2" href="#">Reject</a>
          </div>
        </div>
      </div>
      




      <div className="new-req-card">
        <div className="new-req-img-div">
          <img className="new-req-img" src={avatar}></img>
        </div>
        <div>
          <p className="new-req-name">Farhan Khan, 25, M</p>
          <p className="new-req-ill">Depression, Anxiety</p>
          <div className="new-req-btns">
            <a className="new-req-btn-1" href="#">Accept</a>
            <a className="new-req-btn-2" href="#">Reject</a>
          </div>
        </div>
      </div>





      <div className="new-req-card">
        <div className="new-req-img-div">
          <img className="new-req-img" src={avatar}></img>
        </div>
        <div>
          <p className="new-req-name">Ayushi Gupta, 21, F</p>
          <p className="new-req-ill">Anxiety, Sleep deprivation</p>
          <div className="new-req-btns">
            <a className="new-req-btn-1" href="#">Accept</a>
            <a className="new-req-btn-2" href="#">Reject</a>
          </div>
        </div>
      </div>

      </div>
    
  </div>
  </div>













  <div className="volunteer-subdiv-2">
    <p className="volunteer-subdiv-2-head">DashBoard</p>
    
    <a href="#" className="letstalk">
      <p className="chats">Let's Talk</p>
     
    <img className="volunteer-chat-icon" src={chat} ></img>
    </a>
    
    <a className="volunteerhomepage-btn">Nikhil Yadav</a>
    <a className="volunteerhomepage-btn">Ayush</a>
    <a className="volunteerhomepage-btn">Zeeshan</a>
    <a className="volunteerhomepage-btn">Nida Afreen</a>

  </div>
</div>



  </div>
    )
   }
 }


VolunteerHomapage.propTypes = {}
export default VolunteerHomapage