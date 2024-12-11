import React from "react";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img className={styles.aboutImage} src="#" alt="photo" /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="../assets/about/frontend.png" alt="" className={styles.aboutItemImage} />
            <div>
              <h3 className={styles.aboutItemText}>FrontEnd Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, expedita explicabo. Esse earum, nobis expedita
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="../assets/about/uiux.png" alt="" className={styles.aboutItemImage} />
            <div>
              <h3 className={styles.aboutItemText}>UI UX Designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, expedita explicabo. Esse earum, nobis expedita
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="../assets/about/artist.png" alt="" className={styles.aboutItemImage} />
            <div>
              <h3 className={styles.aboutItemText}>Artist/Designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, expedita explicabo. Esse earum, nobis expedita
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
