import React, { Component } from 'react'
import halflogo from '../../assets/halflogo.jpeg'
import './volunteerhomepage.css'
import avatar from '../../assets/avatar.png'
import chat from '../../assets/chat_icon.gif'

class VolunteerHomapage extends Component {
 state = {}
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
                  <img class="h-8 w-auto sm:h-10" src={halflogo}></img>
                </a>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">

              <a href="#" class="font-medium text-green-100 hover:text-gray-900" id="navbar-links">Home</a>

              <a href="#" class="font-medium text-green-100 hover:text-gray-900" id="navbar-links">About</a>

              <a href="#" class="font-medium text-green-100 hover:text-gray-900" id="navbar-links">Features</a>

              <a href="#" class="font-medium text-green-300 hover:text-#green-500" id="navbar-links">Log in</a>
            </div>
          </nav>
        </div>  
      </div>
    </div>
  </div>













<div className="volunteer-main-div">
  <div className="volunteer-subdiv-1">
    <div className="volunteer-subdiv-1-head">
      <img className="volunteer-img" src={avatar}></img>
      <p className="volunteer-name">Ananya Tripathi</p>
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
          <p className="new-req-name">Patient Name, 21, M</p>
          <p className="new-req-ill">Diasease he is suffering from</p>
          <div className="new-req-btns">
            <a className="new-req-btn-1">Accept</a>
            <a className="new-req-btn-2">Reject</a>
          </div>
        </div>
      </div>
      




      <div className="new-req-card">
        <div className="new-req-img-div">
          <img className="new-req-img" src={avatar}></img>
        </div>
        <div>
          <p className="new-req-name">Patient Name, 21, F</p>
          <p className="new-req-ill">Diasease he is suffering from</p>
          <div className="new-req-btns">
            <a className="new-req-btn-1">Accept</a>
            <a className="new-req-btn-2">Reject</a>
          </div>
        </div>
      </div>





      <div className="new-req-card">
        <div className="new-req-img-div">
          <img className="new-req-img" src={avatar}></img>
        </div>
        <div>
          <p className="new-req-name">Patient Name, 21, M</p>
          <p className="new-req-ill">Diasease he is suffering from</p>
          <div className="new-req-btns">
            <a className="new-req-btn-1">Accept</a>
            <a className="new-req-btn-2">Reject</a>
          </div>
        </div>
      </div>

      </div>
    
  </div>
  </div>













  <div className="volunteer-subdiv-2">
    <p className="volunteer-subdiv-2-head">DashBoard</p>
    <a href="#">
    <img className="volunteer-chat-icon" src={chat} ></img>
    </a>
    
    <a className="volunteerhomepage-btn">Patient 1</a>
    <a className="volunteerhomepage-btn">Patient 2</a>
    <a className="volunteerhomepage-btn">Patient 3</a>
    <a className="volunteerhomepage-btn">Patient 4</a>
    <a className="volunteerhomepage-btn">Patient 5</a>
    <a className="volunteerhomepage-btn">Patient 6</a>
  </div>
</div>



  </div>
    )
   }
 }


VolunteerHomapage.propTypes = {}
export default VolunteerHomapage