import React from "react";
import "./button.css";

const Button = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export default Button;
