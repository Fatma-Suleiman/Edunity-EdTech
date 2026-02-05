import './ContactPage.css';
import BlogCard from "../components/BlogCard";
import InstructorCard from "../components/InstructorCard";
import Instructor1 from "../assets/icons/instructor1.jpg";
import Instructor2 from "../assets/icons/instructor2.jpg";
import Instructor3 from "../assets/icons/instructor3.png";
import Instructor4 from "../assets/icons/instructor4.jpg";
import TopHeader from "../assets/icons/header.svg?react";
import { Button } from "../components/Buttons";

import Icon from "../assets/icons/arrow.svg?react";
import Blog1 from "../assets/icons/blog1.svg?react";
import Blog2 from "../assets/icons/blog2.svg?react";
import Blog3 from "../assets/icons/blog3.svg?react";
import Footer from "../components/Footer";
import BlogImage from "../assets/icons/blogred.svg?react";



const ContactPage = () => {

    
const instructors = [
  { image: Instructor1, name: "Nathan Allen", role: "Teacher" },
  { image: Instructor2, name: "Esther Boyd", role: "Teacher" },
  { image: Instructor3, name: "Jamie Keller", role: "Teacher" },
  { image: Instructor4, name: "Jesus Pendley", role: "Teacher" },
];

const blogs = [
  {
    imageComponent: Blog1,
    date: "21 April 2023",
    comments: " Comment (06)",
     title: "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
  },
  {
     imageComponent: Blog2,
    date: "15 April 2024",
    comments: "Comment (06)",
    title: "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
  },
  {
    imageComponent: Blog3,
    date: "11 May 2024",
    comments: "Comment (06)",
    title: "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
  }
  
];


    return ( 
      <>
      <section id='contact' className="instructor-area page-container">
<div className="instructor-section">
  <p className="section-subtitle">
    <TopHeader />
    TEACHER
    <TopHeader />
  </p>

  <h2 className="section-title">Meet Our Expert Instructor</h2>

  <div className="instructor-grid">
    {instructors.map((item, index) => (
      <InstructorCard key={index} {...item} />
    ))}
  </div>
</div>
</section>

<section id='contact' className="blog-section page-container">
  <div className="blog-header">
  <div className="header-left">
    <div className="header-text">
      <TopHeader /> <span>All Blog Post</span>
    </div>
    <h2 className='header_title_blog'>Most Popular Post.</h2>
  </div>


  <div className="header-right">
    <Button
      text="All Blog Post"
      suffix={<Icon className="btn-icon" />}
      variant="primary"
      width="200px"
      height="59px"
      iconSize="58px"
    />
  </div>
  <BlogImage className="blog_red_image"/>
</div>


  <div className="blog-grid">
    {blogs.map((item, index) => (
      <BlogCard
        key={index}
        {...item}
        button={
          <Button className="btn_blog_post"
                text="Read More"
                suffix={<Icon className="btn-icon" />}
                variant="primary"
                width="165px"
                height="49px"
                iconSize = "50px"
              />
        }
      />
    ))}
  </div>
</section>
<Footer/>
</>
 );
}
 
export default ContactPage;

