import React, { Component } from "react";
import * as api from "./Utils/utils";

class DeleteComment extends Component {
  state = {
    user: "jessjelly"
  };
  render() {
    const { author } = this.props;
    return (
      <div>
        <button
          className="delButton"
          type="submit"
          onClick={this.handleClick}
          disabled={this.state.user !== author}
        >
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
      .then(this.props.removeComment(comment_id))
      .catch(err => {
        console.log(err);
      });
  };
}

export default DeleteComment;
