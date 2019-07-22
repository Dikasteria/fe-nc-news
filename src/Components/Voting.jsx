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
          disabled={voteChange === 1}
          onClick={() => {
            this.vote(1);
          }}
        >
          +
        </button>
        <p>Votes: {votes + voteChange}</p>
        <button
          disabled={voteChange === -1}
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
    const { id, section } = this.props;
    console.log(id, section);
    api.vote(id, increment, section).then(updatedComment => {
      this.setState(state => ({
        voteChange: state.voteChange + increment
      }));
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.votes !== this.props.votes) {
      this.setState({ voteChange: 0 });
    }
  };
}

export default Voting;
