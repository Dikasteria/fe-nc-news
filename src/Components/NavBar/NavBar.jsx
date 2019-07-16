import React, { Component } from "react";
import { Link } from "@reach/router";
import "./NavBar.css";
import * as api from "../Utils/utils";

class NavBar extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="NavBar">
        <nav>Please Click on One of the Following:</nav>
        <Link to="/" className="links">
          Home
        </Link>
        {topics.map(({ slug }) => {
          return (
            <Link to={`/topics/${slug}`} key={slug}>
              {`${slug}`}
            </Link>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
}

export default NavBar;
