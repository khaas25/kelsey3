import React from "react";
import "./header.css";
import Navbar from "../Navbar/Navbar";

export default function Header(props) {
  return (
    <div className="header">
      <Navbar />
      <h1 className="propsheader">{props.title}</h1>
    </div>
  );
}
