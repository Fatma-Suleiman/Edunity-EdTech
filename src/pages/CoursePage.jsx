import "./CoursePage.css";
import CourseCard from "../components/CourseCard";
import { Button } from "../components/Buttons";
import Icon from "../assets/icons/arrow.svg?react";
import CourseCardOne from "../assets/icons/course1.svg?react";
import CourseCardTwo from "../assets/icons/course2.svg?react";
import CourseCardThree from "../assets/icons/course3.svg?react";
import TopHeader from "../assets/icons/header.svg?react";
import IconAvatar from "../assets/icons/angela.svg?react";

const CoursePage = () => {
  return (
    <section id="courses" className="course-card-container">
      <div className="course_card_header">
        <div className="course__header__content">
          <div className="header_lead"> 
            <TopHeader/>
            TOP POPULAR COURSE</div>
          <h1 className="header_course_content">
            Check Out Educate Features <br /> Win Any Exam
          </h1>
        </div>

        <Button 
        className="course_button"
          text="Browse Edunity Courses"
          suffix={<Icon className="btn-icon" />}
          variant="primary"
          width="286px"
        />
        <div className="course__header__cta"></div>
      </div>
      <div className="course_card">
        <CourseCard
          course={{
            imageComponent: <CourseCardOne />,
            category: "Development",
            title: "IT Statistics Data Science And Business Analysis",
            lessons: "Lessons 10",
            duration: "19h 30m",
            students: "Students 20",
            price: 60,
           oldPrice:120,
            author: {
              name: "Angela",
               avatarComponent: <IconAvatar/>,
            },
          }}
        />

        <CourseCard
          course={{
            imageComponent: <CourseCardTwo />,
            category: "Development",
            title: "IT Statistics Data Science And Business Analysis",
            lessons: "Lessons 10",
            duration: "19h 30m",
            students: "Students 20",
            price: 60,
          oldPrice:120,
            author: {
              name: "Angela",
              avatarComponent: <IconAvatar/>,
            },
          }}
        />

        <CourseCard
          course={{
            imageComponent: <CourseCardThree />,
            category: "Development",
            title: "IT Statistics Data Science And Business Analysis",
            lessons: "Lessons 10",
            duration: "19h 30m",
            students: "Students 20",
            price: 60,
             oldPrice:120,
            author: {
              name: "Angela",
               avatarComponent: <IconAvatar/>,
            },
          }}
        />
      </div>
    </section>
  );
};

export default CoursePage;
