
import './BlogPage.css'
import { Button } from "../components/Buttons";

import Icon from "../assets/icons/arrow.svg?react";
import TopHeader from "../assets/icons/header.svg?react";
import EventsIcon from "../assets/icons/eventsicon.svg?react";
import EventsImage from "../assets/icons/eventimage.svg?react";
import EventsImage2 from "../assets/icons/eventimg1.svg?react";
import EventsImage3 from "../assets/icons/eventbtm.svg?react";
import EventsImage4 from "../assets/icons/eventtm.svg?react";
import EventsImage5 from "../assets/icons/event5.svg?react";


const  BlogPage  =  () => {
  return (
    <section id='blogs' className="events-section page-container">
      <div className="events-container">

        {/* LEFT CONTENT */}
        <div className="events-content">
          <span className="events-tag">
            
        
          <TopHeader />
            EXPLORE EVENTS
                 <EventsImage2 className="events-img-header"/>
          </span>

          <h2 className="events-title">
            Our Best Upcoming Events
          </h2>

          <p className="events-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore.
          </p>

          <p className="events-text small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>

         <Button
                          text="Get Ticket Now"
                          suffix={<Icon className="btn-icon" />}
                          variant="primary"
                          width="220px"
                        />

          <div className="events-icon">
            <EventsIcon/>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="events-image">
            <EventsImage4 className="image-top-shape"/>
             <EventsImage5 className="image-top-star"/>
          <EventsImage/>
          
          <EventsImage3 className="image-overlay-shape"/>

        </div>

      </div>
    </section>
  );
};
 
export default BlogPage;