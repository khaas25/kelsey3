import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <ul>
        <li className="links">
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li className="links">
          {" "}
          <Link to="/videos">Videos</Link>{" "}
        </li>
        <li className="links">
          {" "}
          <Link to="/carts">Carts</Link>{" "}
        </li>
        <li className="links">
          {" "}
          <Link to="/viewproducts">Products</Link>{" "}
        </li>
      </ul>
    </div>
  );
}
