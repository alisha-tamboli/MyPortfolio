import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data";

const ProjectList = () => {
  return (
    <section style={{ backgroundColor: "#f7f7f7", padding: "40px 20px", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>My Projects</h2>
      <div
        style={{
          width: "100%",
          height: "800px",
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          padding: "10px",
          scrollBehavior: "smooth",
          scrollbarWidth: "thin", // For Firefox
          msOverflowStyle: "none", // For IE and Edge
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
     </section>
  );
};

export default ProjectList;
