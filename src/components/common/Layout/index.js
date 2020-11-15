import React from "react";
import Header from "../Header";
import "./normalize.css";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
