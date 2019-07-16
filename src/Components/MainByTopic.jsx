import React, { Component } from "react";
import * as api from "./Utils/utils";
import { Link } from "@reach/router";

class MainByTopic extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;

    return (
      <div>
        <form>
          <button type="submit" onClick={this.handleClick}>
            Sort by Date Created
          </button>
          <button type="submit" onClick={this.handleClick}>
            Sort by Comment Count
          </button>
          <button type="submit" onClick={this.handleClick}>
            Sort by Votes
          </button>
        </form>
        <ul className="articles">
          {articles.map(article => {
            const article_id = article.article_id;
            return (
              <li key={article_id} className="article">
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <Link to={`/articles/${article.article_id}`}>Read More</Link>
              </li>
            );
          })}
        </ul>
      </div>
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

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.props.topic !== prevProps.topic) {
      await this.fetchArticles();
    }
  };
}

export default MainByTopic;
