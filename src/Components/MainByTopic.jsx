import React, { Component } from "react";
import * as api from "./Utils/utils";

class MainByTopic extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    const { topic } = this.props.topic;
    return (
      <ul className="articles">
        {articles.map(article => {
          return (
            <li key="article_id" className="article">
              <h2>{article.title}</h2>
              <p>{article.author}</p>
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
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };
}

export default MainByTopic;
