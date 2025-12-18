import { Link } from "react-router-dom";
import "./PageBanner.css";
import FacebookIcon from "../assets/icons/facebook.svg?react";
import ClockIcon from "../assets/icons/clock.svg?react";
import LocationIcon from "../assets/icons/location.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import TwitterIcon from "../assets/icons/twitter.svg?react";
import SnapchatIcon from "../assets/icons/snapchat.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import DividerIcon from "../assets/icons/divider.svg?react";

export function PageBanner() {
  return (
    <section className="banner">
      <div className="banner_contact">
        <div className="banner_contact_left">
          <div className="banner__contact__item">
            <ClockIcon />
            <span>Working: Monday-Friday, 9am-5pm</span>
          </div>
          <div className="banner__contact__item">
            <LocationIcon />
            <span>Hudson, Wisconsin (WI), 54016</span>
          </div>
        </div>

        <div className="banner_contact_right">
          <div className="banner__auth__item">
            <div className="auth_links">
              <UserIcon />
              <Link to="/login">Login/</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>

          <DividerIcon />

          <div className="banner_socials">
            <FacebookIcon />
            <TwitterIcon />
            <SnapchatIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
