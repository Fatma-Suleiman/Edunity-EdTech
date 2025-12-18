import React from "react";
import "./BlogCard.css";
import Comment from "../assets/icons/comment.svg?react";
import Date from "../assets/icons/date.svg?react";

const BlogCard = ({ imageComponent: Image, date, comments, title, button }) => {
    if (!Image) return null;
  return (
    <div className="blog-card">
      <div className="blog-image">
        <Image />
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="date-span"><Date/>{date}</span>
          <span className="comment-span"><Comment/> {comments}</span>
        </div>

        <h4>{title}</h4>

        {button}
      </div>
    </div>
  );
};

export default BlogCard;
