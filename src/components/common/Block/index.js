import React from "react";

const Block = ({ className, children }) => {
  return (
    <div className={`block ${className ? className : ""}`}>{children}</div>
  );
};

export default Block;
