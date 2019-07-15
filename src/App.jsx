import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/Heading/Heading";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { Router } from "@reach/router";
// import * as api from "./Components/Utils/utils";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
