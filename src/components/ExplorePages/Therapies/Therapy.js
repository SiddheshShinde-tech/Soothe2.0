import React, {Component} from "react";
import therapy1 from "../Therapies/TherapyAssets/therapy1.png"
import therapy2 from "../Therapies/TherapyAssets/therapy2.png";
import therapy3 from "../Therapies/TherapyAssets/therapy3.png";
import therapy4 from "../Therapies/TherapyAssets/therapy4.png";
import "./therapy.css";
import logo from "../Therapies/TherapyAssets/logo5.png";



class Therapy extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="Therapy-header1">
          <img src={logo} className="App-logo-assessment" alt="logo" />
          <h1 className="text">Take Therapy</h1>
        </div>

        <div className="MainDivisiontherapy">
          <div className="SubDivisiontherapy">
            <div className="MainCardtherapy">
              <div className="Card-imagetherapy">
                <img className="therapyimage" src={therapy1}></img>
              </div>
              <div className="Card-bodytherapy">
                <a
                  href="https://mindyourmind.ca/apps/StressMeLess/index.html"
                  class="round-button-therapy"
                >
                  Take Therapy
                </a>
              </div>
            </div>

            <div className="MainCardtherapy">
              <div className="Card-imagetherapy">
                <img className="therapyimage" src={therapy2}></img>
              </div>
              <div className="Card-bodytherapy">
                <a
                  href="https://mindyourmind.ca/apps/squishem_desktop/"
                  class="round-button-therapy"
                >
                  Take Therapy
                </a>
              </div>
            </div>
          </div>

          <div className="SubDivisiontherapy">
            <div className="MainCardtherapy">
              <div className="Card-imagetherapy">
                <img className="therapyimage" src={therapy3}></img>
              </div>
              <div className="Card-bodytherapy">
                <a
                  href="https://mindyourmind.ca/apps/Monstressity/"
                  class="round-button-therapy"
                >
                  Take Therapy
                </a>
              </div>
            </div>

            <div className="MainCardtherapy">
              <div className="Card-imagetherapy">
                <img className="therapyimage" src={therapy4}></img>
              </div>
              <div className="Card-bodytherapy">
                <a
                  href="https://mindyourmind.ca/apps/QuoteBloom/en/story_html5.html"
                  class="round-button-therapy"
                >
                  Take Therapy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Therapy;
