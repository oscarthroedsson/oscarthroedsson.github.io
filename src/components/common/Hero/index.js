import React from "react";
import styles from "./hero.module.scss";

const Hero = ({ children, id }) => {
  return (
    <header className={styles.hero} id={id}>
      <div className="container d-flex h-100 align-items-center">
        {children}
      </div>
    </header>
  );
};

export default Hero;
