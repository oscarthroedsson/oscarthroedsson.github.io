import React from "react";
import styles from "./testimonial.module.scss";

const Testimonial = ({ children, stars }) => {
  const renderStars = () => {
    const elements = [];
    for (let i = 0; i < stars; i++) {
      elements.push(
        <span key={i} className={styles.star}>
          <i className="fas fa-dumbbell"></i>
        </span>
      );
    }
    return elements;
  };
  return (
    <div className={styles.testimonial}>
      <span className={styles.quote}>
        <i className="fas fa-quote-right"></i>
      </span>
      {children}
      {renderStars()}
    </div>
  );
};

export default Testimonial;
