import React from "react";
import "./Forms.css";

const Forms = () => {
  return (
    <div className="Wrap">
      <p>
        First Name:
        <input type="text" />
      </p>
      <p>
        Last Name:
        <input type="text" />
      </p>
      <p>
        Phone Number:
        <input type="text" />
      </p>
      <p>
        Message:
        <input type="text" />
      </p>
    </div>
  );
};

export default Forms;
