import "./SectionNavigation.css";
import Logo from '../../assets/icons/logo.svg?react';
import SearchIcon from "../../assets/icons/search.svg?react";
import { Link } from "react-router-dom";

const SectionNavigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation_items">
        <Logo className="navigation_logo" />

        <menu>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </menu>

        <div className="nav_right">
          <SearchIcon />
          
        </div>
      </div>
    </nav>
  );
};

export default SectionNavigation;
