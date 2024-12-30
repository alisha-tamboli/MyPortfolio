import React from "react";
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div
      style={{
        flex: "0 0 90%", // Card takes up most of the screen width on smaller devices
        maxWidth: "500px", // Increased max width for larger screens
        height: "700px", // Increased height to fit more content
        backgroundColor: "#fff",
        border: "2px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        marginRight: "20px",
        padding: "10px"
        // marginBottom: "20px", // Adds space at the bottom for stacking cards
        // transition: "transform 0.3s ease", // Smooth hover effect
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "200px", // Increased height for the image
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />

      {/* Project Details */}
      <div style={{ padding: "15px", textAlign: "left", flexGrow: 1 }}>
        <h5
          style={{
            fontSize: "20px", // Increased font size for better readability
            color: "#333",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {project.title}
        </h5>
        <p
          style={{
            fontSize: "16px", // Increased font size for better readability
            color: "#666",
            marginBottom: "15px",
          }}
        >
          {project.description}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#007BFF",
            fontWeight: "bold",
          }}
        >
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </p>
      </div>

      {/* View Code Button */}
      <div style={{ padding: "15px", textAlign: "center" }}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            backgroundColor: "#f39c12",
            color: "black",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px", // Increased font size for better visibility
            textAlign: "center",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#c27b08";
            e.target.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#f39c12";
            e.target.style.color = "black";
          }}
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
