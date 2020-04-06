import React from "react";
import "./Circle.css";

const Circle = (props) => {
  return (
    <div
      className={"circle" + (props.active ? " active" : " ")} //always ensure that there is space before " active",like that,else it will be read as one class
      onClick={props.click}
      style={{
        backgroundColor: props.active ? props.active : props.mydefaultcolor,
      }}
    ></div>
  );
};

export default Circle;
