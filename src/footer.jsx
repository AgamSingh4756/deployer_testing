import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <b>Explore</b>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/questions">Questions</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/tutorials">Tutorials</Link></li>
          <br></br>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-center">
        <b>Support</b>
        <br></br>

        <ul className="support-links">
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <br></br>
          <li><b>Dev@Deakin</b></li>
          <li>Terms</li>
        </ul>
      </div>
      <div className='footer-right'>
        <b>Stay Connected</b>
        
        <div className="social-links">
          <a href="https://www.facebook.com/ChitkaraU/">
            <FaFacebook />
          </a>
          <a href="https://www.facebook.com/ChitkaraU/">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/ChitkaraU/">
            <FaInstagram />
          </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
        Codes of Conduct
      </div>
    </div>
  );
}

export default Footer;
