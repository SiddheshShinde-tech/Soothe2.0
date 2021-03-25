import React, {Component} from "react";
import xyz from "../../assets/xyz.jpg";
import halflogo from "../../assets/fullLogo.jpeg";
import "./patienthomepage.css";
import {Link} from "react-router-dom";
class PatientHomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="homepage-img-div"
          style={{
            backgroundImage:
              "url(" +
              "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/worldmentalhealthday_16x9.jpg?itok=S0oRECQN" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="relative overflow-hidden ">
            <div class="max-w-10xl mx-auto">
              <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-5">
                <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    class="relative flex items-center justify-between sm:h-20 lg:justify-start"
                    aria-label="Global"
                  >
                    <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div class="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                          <span class="sr-only">Workflow</span>
                          <img class="h-20 w-auto sm:h-45" src={halflogo}></img>
                        </a>
                      </div>
                    </div>
                    <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      <a
                        href="#"
                        class="font-medium text-green-100 hover:text-gray-900"
                      >
                        Home
                      </a>

                      <a
                        href="#"
                        class="font-medium text-green-100 hover:text-gray-900"
                      >
                        About
                      </a>

                      <a
                        href="#"
                        class="font-medium text-green-100 hover:text-gray-900"
                      >
                        Features
                      </a>

                      <a
                        href="#"
                        class="font-medium text-green-300 hover:text-#green-500"
                      >
                        Log in
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="homepage-asses-div">
            <div className="assess-head">
              <p className="assess-head-p">Know about yourself!</p>
            </div>

            <div className="assess-desc">
              <p className="assess-desc-p">
                When you’re going through a tough time it’s normal to feel down
                for a while, emotions like sadness and grief help make us human.
                But if you’re feeling sad or miserable most of the time over a
                long period of time, you might have depression. Think about the
                last two weeks, rather than just today or yesterday. Take this
                self-test to help figure out whether you’re showing any of the
                warning signs of depression. This won’t give you a diagnosis but
                it will help you decide the next step.
              </p>
            </div>

            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
              <div class="rounded-md shadow">
                <Link
                  to="/assessment"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 md:py-2.5 md:text-lg md:px-5"
                  id="patienthomepage-btn"
                >
                  Take Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientHomePage;
