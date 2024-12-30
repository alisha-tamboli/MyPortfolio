import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container"
    onMouseOver={(e) => {
      //e.target.style.backgroundColor = "#c27b08";
      e.target.style.color = "black";
    }}
    onMouseOut={(e) => {
      //e.target.style.backgroundColor = "#f39c12";
      e.target.style.color = "white";
    }}
    >
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-icon">
          <i className="fa fa-user-circle"></i> {/* FontAwesome Icon */}
        </div>
        <p className="about-description">
        Hi, I'm Alisha, a passionate and aspiring software developer with expertise in Python, Java, .NET, and the MERN stack. I have a good foundation in data structures, algorithms, and web development, and I enjoy creating user-friendly and responsive applications.

        I have completed projects in various domains, including a weather application with API integration, a chatbot, a to-do app deployed on Heroku.My goal is to leverage my skills to develop innovative solutions and continuously grow in the field of technology.
        </p>
        <p className="about-quote">"Turning ideas into reality" – Alisha</p>
      </div>

      <div className="about-skills">
        <h3>Technologies which I used to make this Portfolio.</h3>
        <ul>
          <li><i className="fa fa-code"></i> React</li>
          <li><i className="fa fa-cogs"></i> Node.js</li>
          <li><i className="fa fa-database"></i> MongoDB</li>
          <li><i className="fa fa-server"></i> Express</li>
          {/* <li><i className="fa fa-android"></i> Android Development</li> */}
          <li><i className="fa fa-paint-brush"></i> UI/UX Design</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
