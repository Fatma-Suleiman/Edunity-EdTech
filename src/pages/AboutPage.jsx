import "./AboutPage.css";
import AboutPhoto from "../assets/icons/phototall.svg?react";
import AboutSquare from "../assets/icons/photosquare.svg?react";
import AboutYears from "../assets/icons/years.svg?react";
import Triangle from "../assets/icons/triangle.svg?react";
import AboutUs from "../assets/icons/aboutus.svg?react";
import { Button } from "../components/Buttons";
import Icon from "../assets/icons/arrow.svg?react";

const AboutPage = () => {
  return (
    <section id="about" className="container">
      <div className="left">
        <div className="triangle">
          <Triangle />
        </div>

        <div className="photo-tall">
          <AboutPhoto />
        </div>
        <div className="photo-square">
          <AboutSquare />
        </div>

        <div className="badge-years">
          <AboutYears />
        </div>
      </div>

      <div className="right">
        <div className="eyebrow">
          <AboutUs />
          ABOUT US
        </div>
        <h1>
          Benefit From Our Online
          <br /> Learning Expertise Earn <br />{" "}
          <span className="highlight">Professional</span>
        </h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <div className="cols">
          <div className="col">
            <h4>OUR MISSION:</h4>
            <p>
              Suspendisse ultrice gravida dictum fusce placerat ultricies
              integer quis auctor elit sed vulputate mi sit.
            </p>
          </div>
          <div className="col">
            <h4>OUR VISSION:</h4>
            <p>
              Suspendisse ultrice gravida dictum fusce placerat ultricies
              integer quis auctor elit sed vulputate mi sit.
            </p>
          </div>
        </div>

        <div className="cta">
          <Button
            text="Admission Open"
            suffix={<Icon className="btn-icon" />}
            variant="primary"
            width="230px"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
