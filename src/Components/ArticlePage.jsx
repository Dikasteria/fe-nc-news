import React, { Component } from "react";
import * as api from "./Utils/utils";

class ArticlePage extends Component {
  state = {
    article: {}
  };
  render() {
    const { article } = this.state;

    return (
      <div className="articles">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api.getArticle(article_id).then(article => {
      this.setState(article);
    });
  }
}

export default ArticlePage;
