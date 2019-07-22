import React, { Component } from "react";
import * as api from "./Utils/utils";

class AddComment extends Component {
  state = {
    body: "",
    author: "jessjelly"
  };

  render() {
    const { body } = this.state;
    return (
      <div>
        <form className="addcommentbar" onSubmit={this.handleSubmit}>
          <label htmlFor="body" /> New Comment:
          <br />
          <textarea
            type="text"
            id="body"
            value={body}
            onChange={this.handleChange}
            cols="30"
            rows="5"
          />
          <br />
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { id } = this.props;
    const author = this.state.author;
    api
      .postComment(author, body, id)
      .then(({ comment }) => {
        this.props.updateComments(comment);
        this.setState({ body: "" });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
}

export default AddComment;
