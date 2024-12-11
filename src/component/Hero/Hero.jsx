import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hello, Im Afwan</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio quis nihil,
          facere sit adipisci sed at officia vel accusantium maxime eaque a eos eum corporis
          est blanditiis placeat quae!
        </p>
        <a className={styles.contactBtn} href="mailto:akuafwan2@gmail.com">
          Contact Me
        </a>
      </div>

      {/* Hero Image */}
      <img src="../assets/hero/joker.png" alt="Hero" className={styles.heroImage} />

      

      {/* Blurred Background */}
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>

  );
};
