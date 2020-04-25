import React from "react";
const Buttons = ({ click, text, children }) => {
  const styles = {
    width: "100px",
    height: "80px",
    background: "blue",
    margin: "1rem",
    color: "white",
    borderRadius: "5px",
  };
  return (
    <button onClick={click} style={styles}>
      {text}
      {children}
    </button>
  );
};

export default Buttons;
