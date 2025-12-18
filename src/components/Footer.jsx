
import "./Footer.css";

import FooterLogo from "../assets/icons/footerlogo.svg?react";

import Instagram from "../assets/icons/social-instagram.svg?react";
import Pinterest from "../assets/icons/social-pinterest.svg?react";
import Twitter from "../assets/icons/social-twitter.svg?react";
import Facebook from "../assets/icons/social-facebook.svg?react";
import BulletFotter from "../assets/icons/bullet.svg?react";

import Image1footer from "../assets/icons/img1footer.svg?react";
import Image2footer from "../assets/icons/img2footer.svg?react";
import Image3footer from "../assets/icons/img3footer.svg?react";
import Image4footer from "../assets/icons/img4footer.svg?react";
import Image5footer from "../assets/icons/img5footer.svg?react";
import Image6footer from "../assets/icons/img6footer.svg?react";

import FooterTop1 from "../assets/icons/footertop1.svg?react";
import FooterTop2 from "../assets/icons/footertop2.svg?react";
import FooterTop3 from "../assets/icons/footertop3.svg?react";


export default function Footer() {

  const galleryImages = [
  Image1footer,
  Image2footer,
  Image3footer,
  Image4footer,
  Image5footer,
  Image6footer,
];

  return (
    <footer className="footer page-container">
      <div className="footer-top">
        <div className="info-item">
         <div className="info-item-wrapper"><FooterTop1 /></div> 
          <div className="info-item-top">
            <span>Address:</span>
            <strong>1925 Boggess Street</strong>
          </div>
        </div>

        <div className="info-item">
        <div className="info-item-wrapper"><FooterTop2 /></div> 
          <div className="info-item-top">
            <span>Phone:</span>
            <strong>(00) 875 784 568</strong>
          </div>
        </div>

        <div className="info-item">
          <div className="info-item-wrapper"><FooterTop3 /></div> 
          <div className="info-item-top">
            <span>Email:</span>
            <strong>info@gmail.com</strong>
          </div>
        </div>
      </div>

   
      <div className="footer-main">
        <div className="footer-about">
        <FooterLogo/>
          <p className="footer_info">
         Interdum velit laoreet id donec ultrices
tincidunt arcu. Tincidunt tortor aliqua
mfacilisi cras fermentum odio eu.
</p>
         <div className="socials">
  <div className="icon-wrapper"><Facebook /></div>
  <div className="icon-wrapper"><Instagram /></div>
  <div className="icon-wrapper"><Pinterest /></div>
  <div className="icon-wrapper"><Twitter /></div>
</div>

        </div>

        <div className="footer-links">
          <h4 className="footer-content">Our Services:</h4>
          <div>
           <div className="footer-content-list"><BulletFotter /> Web Development</div>
            <div className="footer-content-list"><BulletFotter/> UI/UX Design</div>
             <div className="footer-content-list"><BulletFotter/> Management</div>
            <div className="footer-content-list"><BulletFotter/> Digital Marketing</div> 
             <div className="footer-content-list"><BulletFotter/> Blog News</div>
          </div>
        </div>

        <div className="footer-gallery">
          <h4 className="gallery-heaader">Gallery</h4>
          <div className="gallery-grid">
  {galleryImages.map((ImageComponent, index) => (
    <div key={index} className="gallery-item">
        <ImageComponent /> 
    </div>
  ))}
</div>

        </div>

        <div className="footer-subscribe">
          <h4 className="gallery-heaader">Subscribe</h4>
          <input type="email" placeholder="Enter your email:" />
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        Copyright © 2024 <span>edunity</span> | All Rights Reserved
      </div>
    </footer>
  );
}
