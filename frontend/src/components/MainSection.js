import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <div className="main-section">
      {/* Text Container */}
      <div className="text-container">
        <h1>
          Hi There, <br />
          I'm <span className="highlight">Alisha Tamboli</span>
        </h1>
        <h3>I Am Into Web Development!</h3>
        <button className="about-btn">
          <a
            href="/images/My Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Resume
          </a>
        </button>

        {/* Social Icons */}
        <div className="social-icons">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tamboli-alisha786/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/alisha-tamboli"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          {/* Gmail */}
          <a
            href="mailto:tambolialish2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <i className="fas fa-envelope"></i>
          </a>
         
        </div>
      </div>

      {/* Avatar Container */}
      <div className="avatar-container">
        <img src="/images/portfolio3.png" alt="Avatar" className="avatar" />
      </div>
    </div>
  );
};

export default MainSection;
