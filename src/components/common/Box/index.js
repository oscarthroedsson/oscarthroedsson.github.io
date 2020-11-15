import React from "react";
import "./box.scss";

const Box = ({ className, children }) => {
  return <div className={`box ${className ? className : ""}`}>{children}</div>;
};
export default Box;
