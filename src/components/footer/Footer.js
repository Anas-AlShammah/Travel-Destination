import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"
function Footer() {
  return (
    <footer>
      <div className="social-media-links">
        <a href="https://www.facebook.com/your-page" ><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://www.twitter.com/your-page" ><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.instagram.com/your-page" ><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      <div className="author">
        <p>@Written by Anas</p>
      </div>
    </footer>
  );
}

export default Footer;