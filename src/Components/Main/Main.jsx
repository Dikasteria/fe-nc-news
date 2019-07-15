import React, { Component } from "react";
import "./Main.css";
import { Router } from "@reach/router";

class Main extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <div className="Main">
        <h2>HERE ARE ARTICLES</h2>
      </div>
    );
  }
}

export default Main;
