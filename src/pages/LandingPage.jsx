import { PageHeader } from "../components/PageHeader";
import "./LandingPage.css";
import Search from "../assets/icons/searchicon.svg?react";
import LandingVisualFirst from "../assets/icons/landingvisual1.svg?react";
import LandingVisualSecond from "../assets/icons/landingvisual2.svg?react";
import BadgeStudent from "../assets/icons/badgestudent.svg?react";
import Landing1 from "../assets/icons/landing1.svg?react";
import Landing2 from "../assets/icons/landing2.svg?react";
import Landing3 from "../assets/icons/landing3.svg?react";

const LandingPage = () => {
  return (
    <>
      <PageHeader />
      <section className="landing-content">
        <div className="landing_content_left">
          <div className="landing_text">
            <h3>Learn & Get Certificates</h3>
            <h1>
              Free Online Courses <br /> With Certificates & <br />Diplomas{" "}
            </h1>
            <p>25 Million Learners. 15 Years. 100% </p>
          </div>

          <div className="searchbar">
            <input type="text" placeholder="What do you want to learn today?" />

            <button className="search-btn">
              <Search />
            </button>
          </div>
        </div>

        <div className="landing_content_right">
          <div className="student-card student-card-1">
            <LandingVisualFirst />
            <Landing2 className="student_cricle"/>
          </div>

          <div className="student-card student-card-2">
            <LandingVisualSecond />
            <Landing1 className="student_cricle_red"/>
            <Landing3 className="student_cricle_green"/>
          </div>

          <div className="badge badge-students">
            <p>
              {" "}
              <span className="badge-numbers">2k+</span> <br />
              Student
            </p>
            <BadgeStudent />
          </div>

          <div className="badge badge-courses">
            <p>
              {" "}
              <span className="course-numbers"> 5.8k </span>
              <br />
              Success Courses
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
