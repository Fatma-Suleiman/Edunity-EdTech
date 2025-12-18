import React from "react";
import "./PagesPage.css";
import ClassroomImage from "../assets/icons/classroom.svg?react";
import Status1 from "../assets/icons/Status1.svg?react";
import Status2 from "../assets/icons/Status2.svg?react";
import Status3 from "../assets/icons/Status3.svg?react";
import Status4 from "../assets/icons/Status4.svg?react";

import Progress1 from "../assets/icons/progress1.svg?react";
import Progress2 from "../assets/icons/progress2.svg?react";
import Progress3 from "../assets/icons/progress3.svg?react";
import Progress4 from "../assets/icons/progress4.svg?react";

import Video1 from "../assets/icons/video1.svg?react";
import Video2 from "../assets/icons/video2.svg?react";
import Video3 from "../assets/icons/video3.svg?react";

import Exam1 from "../assets/icons/exam1.svg?react";
import Exam2 from "../assets/icons/exam2.svg?react";

import TestimonialBanner from "../assets/icons/testimonialbanner.svg?react";

import TopHeader from "../assets/icons/header.svg?react";
import FeatureCard from "../components/FeatureCard";
import { Button } from "../components/Buttons";

import Icon from "../assets/icons/arrow.svg?react";
import CoachIcon from "../assets/icons/coach.svg?react";
import TeacherIcon from "../assets/icons/teacher.svg?react";
import BookIcon from "../assets/icons/book.svg?react";
import CameraIcon from "../assets/icons/camera.svg?react";

import PrepCard from "../components/PrepCard";
import GirlImg from "../assets/icons/examgirl.svg?react";
import BoyImg from "../assets/icons/examboy.svg?react";
import ExamBg from "../assets/icons/exambg.png?url";

import TestimonialImg from "../assets/icons/testimonial.jpg";
import Testimonial2Img from "../assets/icons/bgtestimony2.png";

import QuotesImg from "../assets/icons/quotes.png";
import AvatarTestimony from "../assets/icons/avatar-testimony.png";

const PagesPage = () => {
  const features = [
    {
      icon: <CoachIcon />,
      title: "Best Coaching",
      description:
        "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
      buttonText: "View Details",
    },
    {
      icon: <TeacherIcon />,
      title: "Best Coaching",
      description:
        "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
      buttonText: "View Details",
    },
    {
      icon: <BookIcon />,
      title: "Best Coaching",
      description:
        "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
      buttonText: "View Details",
    },
    {
      icon: <CameraIcon />,
      title: "Best Coaching",
      description:
        "In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.",
      buttonText: "View Details",
    },
  ];
  return (
    <>
      <section className="classroom-section">
        <div className="classroom-content">
          <div className="classroom_content_lead">
            {" "}
            <p className="status-section-subtitle">
              {" "}
              <TopHeader />
              OUR STATUS VALUES
            </p>
            <Status1 className="status-image1" />
          </div>
          <h2 className="status-section-title">
            Our Classroom Is A Very Defferent{" "}
            <span className="status-highlight">School</span> Than All The Others
          </h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <div className="stats">
            <div className="stat-item">
              <span>Case study success</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "90%" }}>
                  <Progress1 className="progress-icon" />
                </div>
              </div>
            </div>
            <div className="stat-item">
              <span>Happy student</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "75%" }}>
                  <Progress2 className="progress-icon" />
                </div>
              </div>
            </div>
            <div className="stat-item">
              <span>Engaging</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "93%" }}>
                  <Progress3 className="progress-icon" />
                </div>
              </div>
            </div>
            <div className="stat-item">
              <span>Student Community</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "63%" }}>
                  <Progress4 className="progress-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="classroom-image">
          <ClassroomImage className="classroom_image" />
        </div>
        <Status2 className="status-image2" />
        <Status3 className="status-image3" />
        <Status4 className="status-image4" />
      </section>

      <section className="feature-section">
        <p className="feature-subtitle">
          <TopHeader />
          EDUNITY FEATURE
          <TopHeader />
        </p>
        <h2 className="feature-heading">
          Check Out Educate Features <br /> Win Any Exam
        </h2>

        <div className="feature-grid">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              button={
                <Button
                  text="View Details"
                  suffix={<Icon className="btn-icon" />}
                  variant="primary"
                  width="175px"
                />
              }
            />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <p className="cta-subtitle">Join Our New Session</p>

          <h2 className="cta-title">
            Call To Enroll Your Child <br />
            (+91)958423452
          </h2>

          <Button
            text="Join With us"
            suffix={<Icon className="btn-icon" />}
            variant="primary"
            width="175px"
          />
          <Video1 className="video_image1" />
        </div>

        <Video2 className="video_image2" />

        <div className="cta-video">
          <div className="play-button">▶</div>
          <p className="watch-label">watch now</p>

          <Video3 className="video_image3" />
        </div>
      </section>

      <section className="exam-prep-section">
        <div className="exam-subtitle">
          {" "}
          <TopHeader />
          EXAM PREPARATION <TopHeader />
        </div>
        <h2 className="exam-title">Annual Exam Preparation</h2>

        <div className="prep-grid">
          <PrepCard
            bgColor="#17254E"
            bgImage={ExamBg}
            title="Start From Today"
            subtitle="Join Our Training Courses & Build Your Skill."
            button={
              <Button
                text="Join Now"
                suffix={<Icon className="btn-icon" />}
                variant="primary"
                width="178px"
                height="67px"
                iconSize="66px"
              />
            }
            image={<GirlImg className="exam_image" />}
          >
            <div className="prep-card-content">
              <div className="prep-card-text">
                <h3>Start From Today</h3>
                <p>
                  Join Our Training Courses & <br /> Build Your Skill.
                </p>
              </div>
              <Button
                text="Join Now"
                suffix={<Icon className="btn-icon" />}
                variant="primary"
                width="178px"
                height="58px"
                iconSize="66px"
              />
            </div>
          </PrepCard>

          <PrepCard
            bgColor="#2FC7A1"
            bgImage={ExamBg}
            title="Start From Today"
            subtitle="Join Our Training Courses & Build Your Skill."
            button={
              <Button
                text="Join Now"
                suffix={<Icon className="btn-icon" />}
                variant="secondary"
                width="178px"
                height="67px"
                iconSize="66px"
              />
            }
            image={<BoyImg className="exam_image" />}
          />
          <Exam1 className="exam1_image" />
          <Exam2 className="exam2_image" />
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-banner">
          <div className="banner-item">
            <TestimonialBanner />
            <h1>Online School</h1>
          </div>
          <div className="banner-item">
            <TestimonialBanner />
            <h1>Online School</h1>
          </div>
          <div className="banner-item">
            <TestimonialBanner />
            <h1>Online School</h1>
          </div>
          <div className="banner-item">
            <TestimonialBanner />
            <h1>Online School</h1>
          </div>

          <div className="banner-item">
            <TestimonialBanner />
            <h1>Online School</h1>
          </div>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-image">
            <img src={TestimonialImg} alt="Testimonial" />
          </div>

          {/* Right Card */}

          <div className="testimonial-card">
            <img src={QuotesImg} alt="Testimonial" className="quote-icon" />
            <br />
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              repellat illo iure nesciunt quia quos aut ut, recusandae ex labore
              provident error numquam vero voluptate rem. Odio odit eius nisi
              soluta pariatur consequuntur corrupti minima possimus et eum,
              tempora architecto sunt temporibus, accusantium alias?
            </p>

            <div className="testimonial-author">
              <div className="author-img-wrapper">
                <img
                  src={AvatarTestimony}
                  alt="Gloria Burnett"
                  className="author-img"
                />
              </div>
              <div className="author-info">
                <h4>Gloria Burnett</h4>
                <span>Software Developer</span>
              </div>
            </div>

            <div className="testimonial-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot-center"></span>
              <span className="dot"></span>
            </div>

            <img
              src={Testimonial2Img}
              alt="Testimonial"
              className="testimony_image_bg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PagesPage;
