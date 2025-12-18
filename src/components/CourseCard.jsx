import React from "react";
import "./CourseCard.css";
import DefaultLesson from "../assets/icons/lesson.svg?react";
import DefaultClock from "../assets/icons/clock2.svg?react";
import DefaultUsers from "../assets/icons/users.svg?react";
import StarIcon from "../assets/icons/star.svg?react";
import CartIcon from "../assets/icons/cart.svg?react";

function MetaItem({ icon, children }) {
  return (
    <div className="meta-item">
      <span className="meta-icon">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function CourseCard({ course }) {
  const metaIcons = course.metaIcons || {};
  const LessonsIcon = metaIcons.lessons ?? <DefaultLesson />;
  const DurationIcon = metaIcons.duration ?? <DefaultClock />;
  const UsersIconComponent = metaIcons.students ?? <DefaultUsers />;
  return (
    <div className="course-card">
      <div className="card-media">
        {course.imageComponent ? (
          <div className="svg-wrapper">{course.imageComponent}</div>
        ) : (
          <div className="svg-placeholder" />
        )}
        <div className="category">{course.category}</div>
      </div>

      <div className="card-body">
        <div className="rating">
          <div className="stars">
            <StarIcon />
          </div>
          <span className="rating-num">(4.7)</span>
        </div>

        <h3 className="card-title">{course.title}</h3>

        <div className="meta">
          <MetaItem icon={LessonsIcon}>{course.lessons} </MetaItem>
          <MetaItem icon={DurationIcon}>{course.duration}</MetaItem>
          <MetaItem icon={UsersIconComponent}>{course.students}+</MetaItem>
        </div>

        <div className="divider"></div>

        <div className="card-footer">
          <div className="author">
            <div className="author-avatar avatar-wrapper">
              {course.author.avatarComponent ? (
                course.author.avatarComponent
              ) : (
                <div className="avatar-placeholder" />
              )}
            </div>

            <span className="author-name">
              By {course.author.name} in Development
            </span>
          </div>

          <div className="price-area">
            <div className="price-values">
              <span className="price">${course.price}</span>
              <span className="old-price">${course.oldPrice}</span>
            </div>

            <button className="add-to-cart">
              <CartIcon className="cart-icon" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
