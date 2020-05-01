import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const logo = {
    textDecoration: "none",
    padding: "22px",
  };
  return (
    <div className="head">
      <Link to="/home" style={logo}>
        Florence
      </Link>
      <div className="headers">
        <nav>
          <ul>
            <li>
              <Link to="/home" className="links">
                Home
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link to="/about" className="links">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link to="/blog" className="links">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
