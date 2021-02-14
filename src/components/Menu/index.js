import React, { useState, useEffect } from "react";
import styles from "./menu.module.scss";
import logo from "./logo.svg";
import { Link } from "gatsby";

const Menu = ({ external }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [visible, setVisible] = useState(external || false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300 || external) {
        if (!visible) {
          setVisible(true);
        }
      } else {
        if (visible) {
          setVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible, external]);

  const toggleMenu = (value) => {
    setOpenMenu(value);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        styles.mainNav
      } ${visible ? styles.navbarShrink : ""}`}
      id="mainNav"
    >
      <div className="container" id="hem">
        <Link to="/#vision">
          <img src={logo} className={styles.logo}></img>
        </Link>

        <button
          onClick={(_) => toggleMenu(!openMenu)}
          className={`navbar-toggler ${
            styles.navbarToggler
          } navbar-toggler-right ${openMenu ? "" : "collapsed"}`}
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded={openMenu}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className={`collapse navbar-collapse ${openMenu ? "show" : ""}`}
          id="navbarResponsive"
        >
          <ul className={`navbar-nav ${styles.navbarNav} ml-auto`}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/#vision">
                Vision
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/#om">
                Om mig
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/#tjanster">
                Tjänster
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/#anmalan">
                Anmälan
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
