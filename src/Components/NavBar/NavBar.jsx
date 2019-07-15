import React, { Component } from "react";
import { Link } from "@reach/router";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav>Please Click on One of the Following:</nav>
        <Link to="/">Home</Link>
        <Link to="/topics/:topic_id">Topic 1</Link>
        <Link to="/topics/:topic_id">Topic 2</Link>
        <Link to="/topics/:topic_id">Topic 3</Link>
      </div>
    );
  }
}

export default NavBar;
