import React, {Component} from "react";
import images from "../../assets/images.jpg";
import avatar from "../../assets/avatar.png";
import chat from "../../assets/chat.png";
import mainimage2 from "../../assets/mainimage2.jpg";
import assessment from "../../assets/assessment.PNG";
import blogs from "../../assets/blogs.PNG";
import therapy from "../../assets/therapy.jpg";
import doctors from "../../assets/doctors.jpg";
import xyz from "../../assets/xyz.jpg";
import halflogo from "../../assets/fullLogo.jpeg";
import selftrack from "../../assets/selftrack.jpg";
import "./herosection.css";
import {Link} from "react-router-dom";
import {Login} from "../SignUp/Login";
import {authenticateUser} from "../SignUp/Login";

// function temp()
// {
//   LoginCheck();
// }

class HeroSection extends Component {
  state = {};
  render() {
    console.log("We are in the Hero Section");
    return (
      
      <div className="mainpageDiv">
        <div class="relative bg-white overflow-hidden" id="herosection">
          <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div class="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span class="sr-only">Workflow</span>
                        <img class="h-8 w-auto sm:h-10" src={halflogo}></img>
                      </a>
                      <div class="-mr-2 flex items-center md:hidden">
                        <button
                          type="button"
                          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          aria-expanded="false"
                        >
                          <span class="sr-only">Open main menu</span>

                          <svg
                            class="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <a
                      href="#"
                      class="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Home
                    </a>

                    <a
                      href="#"
                      class="font-medium text-gray-500 hover:text-gray-900"
                    >
                      About
                    </a>

                    <a
                      href="#"
                      class="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Features
                    </a>

                    <a
                      onClick={authenticateUser}
                      href="#"
                      class="font-medium text-green-600 hover:text-#green-500"
                    >
                      <Link to="/signup">Log in</Link>
                    </a>
                  </div>
                </nav>
              </div>

              <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      ></img>
                    </div>
                    <div class="-mr-2">
                      <button
                        type="button"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span class="sr-only">Close main menu</span>

                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="px-2 pt-2 pb-3 space-y-1">
                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Product
                    </a>

                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>

                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>

                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <a
                    href="#"
                    class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </div>

              <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl tracking-tight font-extrabold text-grey-900 sm:text-5xl md:text-6xl">
                    <span class="block xl:inline" id="happymind">
                      Happy Mind leads to{" "}
                    </span>
                    <span class="block text-green-400 xl:inline" id="happylife">
                      Happy Life!
                    </span>
                  </h1>
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    It’s normal to feel down, emotions like sadness and grief
                    help make us human. Let's start this journey together and
                    heal our lives.
                  </p>
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                      <Link
                        to="/login"
                        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-indigo-700 md:py-2.5 md:text-lg md:px-5"
                        id="mainbtn1"
                      >
                        Get started
                      </Link>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-indigo-200 md:py-2.5 md:text-lg md:px-5"
                        id="mainbtn2"
                      >
                        Free Trial
                      </a>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">
                    A kind heart, a healthy mind and little patience is all you
                    need to bring a smile on someone's face. Volunteer with us
                    to make this world a happy place!
                  </p>

                  <div class="rounded-md ">
                      <Link
                        to="/VolunteerHomePage"
                        class="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-green-400 hover:bg-indigo-700 md:py-2.5 md:text-lg md:px-5"
                        id="volunteer-btn"
                      >
                        Volunteer
                      </Link>
                    </div>



                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={xyz}
              alt=""
            ></img>
          </div>
        </div>

















        <div className="quote-main-div">
          <div className="quote-div">
            <center>
              <p className="quote">
                {" "}
                Mental health is not the destination, but a process. Its about
                how you drive, not where you are going.
              </p>
              <p className="author">- Noam Spencer</p>
            </center>
          </div>
        </div>












        <div className="mainpage-card-div">
          <div className="card-img-div">
            <img className="card-image" src={assessment}></img>
          </div>
          <div className="card-content-div">
            <p className="card-head">
              Take Assessment with us to know how healthy you are!
            </p>
            <p className="card-content">
              This won’t give you a diagnosis but it will help you decide the
              next step.
            </p>
            <a className="round-button" href="#">
              Take Assessment
            </a>
          </div>
        </div>

        <div className="mainpage-card-div-1">
          <div className="card-content-div">
            <p className="card-head">
              Therapies & Games can change the way you think!
            </p>
            <p className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="round-button" href="#">
              Take Assessment
            </a>
          </div>
          <div className="card-img-div">
            <img className="card-image-1" src={therapy}></img>
          </div>
        </div>

        <div className="mainpage-card-div">
          <div className="card-img-div">
            <img className="card-image" src={blogs}></img>
          </div>
          <div className="card-content-div">
            <p className="card-head">Reading heals you in the best way!</p>
            <p className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="round-button" href="#">
              Take Assessment
            </a>
          </div>
        </div>





<div className="mainpage-card-div-1">
    
    <div className="card-content-div">
        <p className="card-head">Challenge yourself & see the change!</p>
        <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a className="round-button" href="#">Take Assessment</a>
    </div>
    <div className="card-img-div">
        <img className="card-image-1" src={selftrack}></img>

    </div>
</div>

<div className="mainpage-card-div">
    <div className="card-img-div">
        <img className="card-image-chat" src={chat}></img>

    </div>
    <div className="card-content-div">
        <p className="card-head">Pour yourself out! We are here to listen you.</p>
        <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a className="round-button" href="#">Take Assessment</a>
    </div>
</div>

<div className="mainpage-card-div-1">
    
    <div className="card-content-div">
        <p className="card-head">Expert Doctors are always there to help you out!</p>
        <p className="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a className="round-button" href="#">Take Assessment</a>
    </div>
    <div className="card-img-div">
        <img className="card-image-1" src={doctors}></img>

    </div>
</div>









        

      

        

        <div className="mainpage-review-div">
          <center>
            <p className="review-head">Our Philantrophist</p>
            <p className="review-p">We are happy if you are happy :)</p>
          </center>

          <div className="review-card-div">
            <div className="review-card">
              <div className="review-card-head">
                <img className="review-img" src={avatar}></img>
                <center>
                  <p className="review-name">Person name</p>
                  <label>Date</label>
                </center>
              </div>
              <p className="review-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. A
                diam sollicitudin tempor id. Et netus et malesuada fames ac
                turpis egestas maecenas pharetra. Donec adipiscing tristique
                risus nec feugiat. Tortor at auctor urna nunc. Duis tristique
                sollicitudin nibh sit amet commodo nulla facilisi. Pellentesque
                diam volutpat commodo sed. Nunc sed velit dignissim sodales ut
                eu. Sit amet justo donec enim diam vulputate ut pharetra. Quis
                risus sed vulputate odio. Tellus id interdum velit laoreet id
                donec.
              </p>
            </div>

            <div className="review-card">
              <div className="review-card-head">
                <img className="review-img" src={avatar}></img>
                <center>
                  <p className="review-name">Person name</p>
                  <label>Date</label>
                </center>
              </div>
              <p className="review-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. A
                diam sollicitudin tempor id. Et netus et malesuada fames ac
                turpis egestas maecenas pharetra. Donec adipiscing tristique
                risus nec feugiat. Tortor at auctor urna nunc. Duis tristique
                sollicitudin nibh sit amet commodo nulla facilisi. Pellentesque
                diam volutpat commodo sed. Nunc sed velit dignissim sodales ut
                eu. Sit amet justo donec enim diam vulputate ut pharetra. Quis
                risus sed vulputate odio. Tellus id interdum velit laoreet id
                donec.
              </p>
            </div>

            <div className="review-card">
              <div className="review-card-head">
                <img className="review-img" src={avatar}></img>
                <center>
                  <p className="review-name">Person name</p>
                  <label>Date</label>
                </center>
              </div>
              <p className="review-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. A
                diam sollicitudin tempor id. Et netus et malesuada fames ac
                turpis egestas maecenas pharetra. Donec adipiscing tristique
                risus nec feugiat. Tortor at auctor urna nunc. Duis tristique
                sollicitudin nibh sit amet commodo nulla facilisi. Pellentesque
                diam volutpat commodo sed. Nunc sed velit dignissim sodales ut
                eu. Sit amet justo donec enim diam vulputate ut pharetra. Quis
                risus sed vulputate odio. Tellus id interdum velit laoreet id
                donec.
              </p>
            </div>
          </div>
        </div>

        <div
          className="bottom-img-div"
          style={{
            backgroundImage:
              "url(" +
              "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <center>
            <p className="quote-2">Come Join Us</p>
          </center>
          <div className="btns">
            <a className="round-button">Button 1</a>
            <a className="round-button">Button 2</a>
          </div>
        </div>

        <div className="main-footer">
          <div className="footer-up">
            <div className="footer-head">
              <p className="footer-heading">Follow us at</p>
            </div>
            <div className="footer-links">
              <div className="links">
                <p className="link-head">USEFUL LINKS</p>
                <p className="link-p">About Us</p>
                <p className="link-p">Martketplace</p>
              </div>
              <div className="refrences">
                <p className="link-head">OTHER RESOURCES</p>
                <p className="link-p">Terms & Conditions</p>
                <p className="link-p">Privacy Policy</p>
                <p className="link-p">Contact Us</p>
              </div>
            </div>
          </div>
          <div className="footer-down">
            <p className="copyright">
              <center>Copyright © 2021 Soothe</center>
            </p>
          </div>
        </div>
      </div>

    
      
    );
  }
}

HeroSection.propTypes = {};
export default HeroSection;
