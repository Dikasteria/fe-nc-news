import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/Heading/Heading";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import MainByTopic from "./Components/MainByTopic";
import ArticlePage from "./Components/ArticlePage";
import { Router } from "@reach/router";
import AddComment from "./Components/AddComment";
import DeleteComment from "./Components/DeleteComment";
import Voting from "./Components/Voting";
import Error from "./Components/Error";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <NavBar />
      <Router>
        <Main path="/" />
        <MainByTopic path="/topics/:topic" />
        <ArticlePage path="/articles/:article_id" />
        {/* <AddComment path="/articles/:article_id/newComment" /> */}
        {/* <DeleteComment path="/articles/:article_id/comments" /> */}
        {/* <Voting path="/articles/:article_id/comments" /> */}
        <Error default path="/error" />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
