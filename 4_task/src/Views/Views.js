import React from "react";
import "./Views.css";

const Views = () => {
  return (
    <div className="Wrap">
      <h1>Your input </h1>
      <h3>
        First Name:
        <p>{}</p>
      </h3>
      <h3>
        Last Name:
        <p>{}</p>
      </h3>
      <h3>
        Phone Number:
        <p>{}</p>
      </h3>
      <h3>
        Message:
        <p>{}</p>
      </h3>
    </div>
  );
};

export default Views;
