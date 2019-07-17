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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="body" /> New Comment:
          <input
            type="text"
            id="body"
            value={body}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
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
    console.log(body);
    const author = this.state.author;
    api
      .postComment(body, id, author)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default AddComment;
