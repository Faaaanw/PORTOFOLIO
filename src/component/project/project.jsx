import React from "react";
import projects from "../../data/projects.json";
import styles from "./project.module.css";
import { ProjectCard } from "./ProjectCard"; // Ganti dengan huruf kapital

export const Project = () => {
  return (
    <section className={styles.container} id="project">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
