import React from "react";

const Input = ({ type, label, name, value, onChange }) => {
  return (
    <React.Fragment>
      <label className="text-white" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </React.Fragment>
  );
};

export default Input;
