import React, { Component } from "react";
import * as api from "./Utils/utils";
import AddComment from "./AddComment";
// import { async } from "q";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: []
  };
  render() {
    const { article, comments } = this.state;
    return (
      <div className="articles">
        <h2>{article.title}</h2>
        <h3>{article.body}</h3>
        <h3>Votes: {article.votes}</h3>
        <h3>Comment Count: {article.comment_count}</h3>
        <div className="comments">
          <AddComment
            key="addComment"
            updateComments={this.updateComments}
            id={article.article_id}
            className="addcommentbar"
          />
          {comments.map(comment => {
            return (
              <li key="comment_id" className="comment">
                <h3>Comment: {comment.body}</h3>
                <h4>Author: {comment.author}</h4>
                <p>Votes: {comment.votes}</p>
              </li>
            );
          })}
        </div>
      </div>
    );
  }

  updateComments = comment => {
    this.state.article.comment_count++;
    this.setState({ comments: [comment, ...this.state.comments] });
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticle(article_id).then(article => {
      this.setState(article);
    });
    api.getComments(article_id).then(comments => {
      this.setState(comments);
    });
  }
}

export default ArticlePage;
