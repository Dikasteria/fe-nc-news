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
          <i class="fa fa-home" />
        </Link>
        <Link to="/topics/coding" className="links">
          <i class="fas fa-keyboard" />
        </Link>
        <Link to="/topics/football" className="links">
          <i class="fas fa-futbol" />
        </Link>
        <Link to="/topics/cooking" className="links">
          <i class="fas fa-hamburger" />
        </Link>
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
