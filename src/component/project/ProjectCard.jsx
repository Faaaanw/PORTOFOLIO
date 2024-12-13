import React from "react";
import styles from "./projectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  return (
    <div className={styles.container} id="projects">
      <img
        className={styles.image}
        src={`/assets/${imageSrc}`}
        alt={`Image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}> {description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          ); // Tambahkan return di dalam map
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Source
        </a>
        <a href={source} className={styles.link}>
          Demo
        </a>
      </div>
    </div>
  );
};
