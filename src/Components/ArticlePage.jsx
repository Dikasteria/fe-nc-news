import React, { Component } from "react";
import * as api from "./Utils/utils";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
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
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        <p>Comment Count: {article.comment_count}</p>

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
                <p>Comment: {comment.body}</p>
                <p>Author: {comment.author}</p>
                <p>Votes: {comment.votes}</p>
                <DeleteComment
                  comment_id={comment.comment_id}
                  removeComment={this.removeComment}
                />
              </li>
            );
          })}
        </div>
      </div>
    );
  }

  updateComments = comment => {
    this.setState(state => {
      state.article.comment_count++;
      return { comments: [comment, ...this.state.comments] };
    });
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
  removeComment = () => {
    this.setState(state => {
      state.article.comment_count--;
      return { comments: [...this.state.comments.slice(1)] };
    });
  };
}

export default ArticlePage;
