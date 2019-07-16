import React, { Component } from "react";
import "./Main.css";
import * as api from "../Utils/utils";
import { Link } from "@reach/router";

class Main extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <ul className="articles">
        {articles.map(article => {
          return (
            <li key="article_id" className="article">
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <Link to={`/articles/${article.article_id}`}>Read More</Link>
            </li>
          );
        })}
      </ul>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };
}
export default Main;
