import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/Heading/Heading";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import MainByTopic from "./Components/MainByTopic";
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <NavBar />
        <Router>
          <Main path="/" />
          <MainByTopic path="/topics/:topic" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
