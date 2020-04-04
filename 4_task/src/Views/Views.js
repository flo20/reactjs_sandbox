import React from "react";
import "./Views.css";

const Views = (props) => {
  return (
    <div className="Wrap">
      <p>{props.first}</p>
      <p>{props.last}</p>
      <p>{props.phone}</p>
      <p>{props.mess}</p>
    </div>
  );
};

export default Views;
