import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import {Button} from "../Button";
import "./Navbar.css";
import Img from "../../../../assets/fullLogo.jpeg";
import {Link} from "react-router-dom";
import fullLogo from '../../../../assets/fullLogo.jpeg'

class Navbar extends Component {
  state = {clicked: false};

  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  };

  render() {
    return (
      
      <div class="relative overflow-hidden" id="treatment-navbar">
          <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-5 ">
              <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div class="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span class="sr-only">Workflow</span>
                        <img class="h-8 w-auto sm:h-10" src={fullLogo}></img>
                      </a>
                    </div>
                  </div>
                  <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <a
                      href="#"
                      class="font-medium text-green-100 hover:text-gray-900"
                      id="navbar-links"
                    >
                      Home
                    </a>

                    <a
                      href="#"
                      class="font-medium text-green-100 hover:text-gray-900"
                      id="navbar-links"
                    >
                      About
                    </a>

                    <a
                      href="#"
                      class="font-medium text-green-100 hover:text-gray-900"
                      id="navbar-links"
                    >
                      Features
                    </a>

                    <a
                      href="#"
                      class="font-medium text-green-300 hover:text-#green-500"
                      id="navbar-links"
                    >
                      Log out
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Navbar;
