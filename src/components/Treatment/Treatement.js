import React, {Component} from "react";
import "./treatement.css";
import halflogo from "../../assets/fullLogo.jpeg";
import images from "../../assets/images.jpg";
import avatar from "../../assets/avatar.png";
import chat from "../../assets/chat.png";
import mainimage2 from "../../assets/mainimage2.jpg";
import assessment from "../../assets/assessment.PNG";
import blogs from "../../assets/blogs.PNG";
import therapy from "../../assets/therapy.jpg";
import doctors from "../../assets/doctors.jpg";
import xyz from "../../assets/xyz.jpg";
import selftrack from "../../assets/selftrack.jpg";
import {Link} from "react-router-dom";

class Treatement extends Component {
  state = {};
  render() {
    return (
      <div>
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
                        <img class="h-8 w-auto sm:h-10" src={halflogo}></img>
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
                      Log in
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="mainpage-card-div">
          <div className="card-content-div">
            <p className="card-head">
              Therapies & Games can change the way you think!
            </p>
            <p className="card-content">
              Are you struggling with feelings of anxiety, anger, or depression?
              Do you feel ill-equipped to deal with conflict, a life transition,
              or the challenges of personal and professional relationships? Is
              your mind full of worried thoughts of not being good enough or
              feeling like an imposter? Are you seeking ways to learn more
              effective coping strategies and new tools to tackle life’s
              adversities? Then take a appoint of yourself with the therapies
              and nudge yourself towards relaxation and calmness.
            </p>
            <Link to="/therapy" className="round-button">
              Take Therapy
            </Link>
          </div>
          <div className="card-img-div">
            <img className="card-image-1" src={therapy}></img>
          </div>
        </div>

        <div className="mainpage-card-div-1">
          <div className="card-img-div">
            <img className="card-image" src={blogs}></img>
          </div>
          <div className="card-content-div">
            <p className="card-head">Reading heals you in the best way!</p>
            <p className="card-content">
              When you’re depressed, it can feel like you’ll never get out from
              under a dark shadow. However, even the most severe depression is
              treatable. So, if your depression is keeping you from living the
              life you want to, don’t hesitate to seek help. From therapy to
              medication to healthy lifestyle changes, there are many different
              treatment options available.Of course, just as no two people are
              affected by depression in exactly the same way, neither is there a
              “one size fits all” treatment to cure depression. What works for
              one person might not work for another. By becoming as informed as
              possible, though, you can find the treatments...
            </p>
            <Link to="/post/1" className="round-button">
              Read Here
            </Link>
          </div>
        </div>

        <div className="mainpage-card-div">
          <div className="card-content-div">
            <p className="card-head">Challenge yourself & feel the change!</p>
            <p className="card-content">
              A portal that gamifies stress/anxiety/depression management in an
              actionable manner to provide relief. It quantifies the difference
              in a user's actual and ideal stress/anxiety/depression level as
              credits to be spent on a prescribed set of activities before the
              day ends. By doing so, users inadvertently take actionable steps
              to deal with their condition.
            </p>
            <Link to="/selfTracking" className="round-button">
              Start
            </Link>
          </div>
          <div className="card-img-div">
            <img className="card-image-1" src={selftrack}></img>
          </div>
        </div>

        <div className="mainpage-card-div-1">
          <div className="card-img-div">
            <img className="card-image-chat" src={chat}></img>
          </div>
          <div className="card-content-div">
            <p className="card-head">
              Pour yourself out! We are here to listen you.
            </p>
            <p className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="round-button" href="#">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="mainpage-card-div">
          <div className="card-content-div">
            <p className="card-head">
              Expert Doctors are always there to help you out!
            </p>
            <p className="card-content">
              Do you feel depressed, anxious, worried about relationship issues
              or suicidal? Do you have a question related to your own or someone
              else's mental health? India’s Best Online Therapy and Counselling
              Consultation Website. Soothe provides the best psychologist and
              counsellors in India. Our trained counsellors are qualified and
              are available day and night. We are here to help answer any
              questions you might have about mental health. Get Face-to-face
              Counselling Therapy Consultation. It is convenient, Affordable and
              Private. Confidentiality is highly maintained. You can take up
              therapy as per your convenience without hampering your daily
              schedules. You can mutually fix the session with the therapist as
              well.
            </p>
            <Link to="/doctors" className="round-button">
              Consult Doctors
            </Link>
          </div>
          <div className="card-img-div">
            <img className="card-image-1" src={doctors}></img>
          </div>
        </div>
      </div>
    );
  }
}

Treatement.propTypes = {};
export default Treatement;
