import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Heading from "./Components/Heading/Heading";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

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
