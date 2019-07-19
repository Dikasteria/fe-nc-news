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
        <Link to="/" className="links">
          <i class="fas fa-futbol" />
          Home
        </Link>
        {topics.map(({ slug }) => {
          return (
            <Link className="links" to={`/topics/${slug}`} key={slug}>
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
