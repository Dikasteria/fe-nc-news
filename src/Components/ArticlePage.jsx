import React, { Component } from "react";
import * as api from "./Utils/utils";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
import Voting from "./Voting";
// import { async } from "q";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: []
  };
  render() {
    const { article, comments } = this.state;
    return (
      <div className="single_article">
        <h2 className="articleTitle">{article.title}</h2>
        <p className="articleDetails">{article.body}</p>
        <p className="articleInfo">Votes: {article.votes}</p>
        <p className="articleInfo">
          <i class="far fa-comments fa-lg" />
          {article.comment_count}
        </p>
        <AddComment
          key="addComment"
          updateComments={this.updateComments}
          id={article.article_id}
        />
        <div className="comments">
          {comments.map(comment => {
            return (
              <li key="comment_id" className="comment">
                <p>Comment: {comment.body}</p>
                <p>Author: {comment.author}</p>
                <br />
                <Voting
                  key="votes"
                  votes={comment.votes}
                  section="comments"
                  id={comment.comment_id}
                />
                <DeleteComment
                  comment_id={comment.comment_id}
                  removeComment={this.removeComment}
                  author={comment}
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
  removeComment = comment_id => {
    this.setState(state => {
      state.article.comment_count--;
      return {
        comments: [
          ...this.state.comments.filter(ele => {
            return ele.comment_id !== comment_id;
          })
        ]
      };
    });
  };
}

export default ArticlePage;
