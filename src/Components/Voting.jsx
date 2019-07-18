import React, { Component } from "react";
import * as api from "./Utils/utils";

class Voting extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.vote(1);
          }}
        >
          +
        </button>
        <p>Votes: {votes + voteChange}</p>
        <button
          onClick={() => {
            this.vote(-1);
          }}
        >
          -
        </button>
      </div>
    );
  }
  vote = increment => {
    const { comment_id, section } = this.props;
    api.vote(comment_id, increment, section).then(updatedComment => {
      this.setState(state => ({
        voteChange: state.voteChange + increment
      }));
    });
  };
}

export default Voting;
