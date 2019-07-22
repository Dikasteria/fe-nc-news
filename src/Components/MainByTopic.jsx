import React, { Component } from "react";
import * as api from "./Utils/utils";
import { Link } from "@reach/router";
import Voting from "./Voting";

class MainByTopic extends Component {
  state = {
    articles: [],
    sorted: "asc"
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="article_display">
        <section className="sortbuttons">
          <button
            className="sort_button"
            onClick={this.handleClick}
            value="created_at"
          >
            Sort by Date Created
          </button>
          <button
            className="sort_button"
            onClick={this.handleClick}
            value="comment_count"
          >
            Sort by Comment Count
          </button>
          <button
            className="sort_button"
            onClick={this.handleClick}
            value="votes"
          >
            Sort by Votes
          </button>
        </section>
        <ul className="articles">
          {articles.map(article => {
            const article_id = article.article_id;
            return (
              <li key={article_id} className="article">
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <Link
                  className="artLink"
                  to={`/articles/${article.article_id}`}
                >
                  Read More
                </Link>
                <Voting
                  key="votes"
                  votes={article.votes}
                  section="articles"
                  id={article.article_id}
                />
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

  handleClick = event => {
    const { topic } = this.props;
    const sort_by = event.target.value;
    api.getArticles(topic, sort_by).then(articles => {
      this.setState({ articles });
    });
  };
}

export default MainByTopic;
