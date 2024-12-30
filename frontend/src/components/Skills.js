import React from 'react';
import './Skills.css'; // Custom CSS for styling
import { FaReact, FaAngular, FaGit, FaPython, FaNodeJs, FaJava, FaJsSquare, FaGithub, FaFlask } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';


const technicalSkills = [
  { 
    category: 'Frontend', 
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Angular', icon: <FaAngular /> },
      { name: 'Python Flask', icon: <FaFlask /> },
    ]
  },
  { 
    category: 'Backend', 
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Python', icon: <FaPython /> },
    ]
  },
  { 
    category: 'Other', 
    skills: [
        { name: 'Git', icon: <FaGit /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'JavaScript', icon: <FaJsSquare /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'MongoDB', icon: <SiMongodb /> }
    ]
  }
];

const softSkills = [
  { name: 'Communication', icon: '🗣️' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Problem-Solving', icon: '🧠' },
  { name: 'Time Management', icon: '⏱️' },
  { name: 'Creativity', icon: '🎨' }
];

const Skills = () => {
  return (
    <div className="skills-container"
    onMouseOver={(e) => {
      //e.target.style.backgroundColor = "#c27b08";
        e.target.style.color = "#c27b08";
    }}
    onMouseOut={(e) => {
      //e.target.style.backgroundColor = "#f39c12";
        e.target.style.color = "black";
    }}
    >
      <h2 className="text-center mb-4">My Skills</h2>
      {/* <p className="text-center mb-4">Here are the skills I'm proficient in, categorized into technical and soft skills.</p> */}

      {/* Technical Skills */}
      <div className="technical-skills">
        <h3>Technical Skills</h3>

        <div className="row">
          {technicalSkills.map((group, index) => (
            <div key={index} className="col-md-4 mb-3">
              <h5>{group.category}</h5>
              <ul className="skills-list">
                {group.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span> {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="soft-skills mt-4">
        <h3>Soft Skills</h3>
        <ul className="skills-list">
          {softSkills.map((skill, index) => (
            <li key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span> {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
