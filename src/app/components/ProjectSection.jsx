"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Projects } from "../constants";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectSection = (props) => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = Projects.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="border-t-[#33353F]">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag == "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag == "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag == "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            tag={project.tag}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

ProjectSection.propTypes = {};

export default ProjectSection;
