import React, { Component } from "react";
import * as api from "./Utils/utils";

class DeleteComment extends Component {
  state = {
    user: "jessjelly"
  };
  render() {
    return (
      <div>
        <button type="submit" onClick={this.handleClick}>
          Delete Comment
        </button>
      </div>
    );
  }
  handleClick = event => {
    event.preventDefault();
    const { comment_id } = this.props;
    api
      .deleteComment(comment_id)
      .then(this.props.removeComment())
      .catch(err => {
        console.log(err);
      });
  };
}

export default DeleteComment;
