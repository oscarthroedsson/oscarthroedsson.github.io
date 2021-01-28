import React, { useState, useEffect } from "react";
import Scroll from "../Scroll";
import { Link } from "gatsby";
import logo from "../../assets/images/logo.png";

const Header = ({ logoOnly = false }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [visibilityClass, setVisibilityClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300 || logoOnly) {
        if (visibilityClass !== "navbar-shrink") {
          setVisibilityClass("navbar-shrink");
        }
      } else {
        if (visibilityClass === "navbar-shrink") {
          setVisibilityClass("");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibilityClass]);

  const toggleMenu = (value) => {
    setOpenMenu(value);
  };

  const renderMenu = () => {
    return (
      <React.Fragment>
        <button
          onClick={(_) => toggleMenu(!openMenu)}
          className={`navbar-toggler navbar-toggler-right ${
            openMenu ? "" : "collapsed"
          }`}
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Scroll
                onClick={(_) => toggleMenu(!openMenu)}
                type="id"
                element="vision"
              >
                <a className="nav-link" href="/#vision">
                  Vision
                </a>
              </Scroll>
            </li>

            <li className="nav-item">
              <Scroll
                onClick={(_) => toggleMenu(!openMenu)}
                type="id"
                element="om"
              >
                <a className="nav-link" href="/#om">
                  Om mig
                </a>
              </Scroll>
            </li>
            <li className="nav-item">
              <Scroll
                onClick={(_) => toggleMenu(!openMenu)}
                type="id"
                element="tjanster"
              >
                <a className="nav-link" href="/#tjanster">
                  Tjänster
                </a>
              </Scroll>
            </li>
            <li className="nav-item">
              <Scroll
                onClick={(_) => toggleMenu(!openMenu)}
                type="id"
                element="anmalan"
              >
                <a className="nav-link" href="/#anmalan">
                  Anmälan
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
      id="mainNav"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          Oscar Throedsson
        </Link>

        {!logoOnly && renderMenu()}
      </div>
    </nav>
  );
};
export default Header;
