import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p> <i className='fas fa-location-dot'></i>Location: Pune</p>
          <p> <i className="fas fa-phone"></i> Phone: +91 878 807 8154</p>
          <p> <i className="fas fa-envelope"></i> Email: tambolialisha2003@gmail.com</p>
          <div className="footer-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:info@example.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-column">
          <h4>Contact page</h4>
          <p>Contact me to stay updated with our latest news and offers.</p>
          <div className="newsletter">
            {/* <input type="email" placeholder="Your email" /> */}
            {/* <button>Contact me</button> */}
            <button 
              type="submit" 
              style={{ backgroundColor: '#f39c12', border: 'none', padding: '10px' }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#c27b08";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#f39c12";
                e.target.style.color = "black";
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 My Portfolio All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
