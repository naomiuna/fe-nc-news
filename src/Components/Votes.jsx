import React from 'react';
import Emoji from './Emoji';
import * as api from '../Utils/api';
import styles from './Votes.module.css';

class Votes extends React.Component {
  state = {
    optimisticVotes: 0
  };
  render() {
    const { votes } = this.props;
    const { optimisticVotes } = this.state;
    return (
      <section className={styles.votes}>
        <button
          onClick={() => this.handleClick(1)}
          disabled={optimisticVotes > 0}
        >
          <Emoji symbol="👍" label="thumbs up" />
        </button>
        <p className={styles.p}>{votes + optimisticVotes}</p>
        <button
          onClick={() => this.handleClick(-1)}
          disabled={optimisticVotes < 0}
        >
          <Emoji symbol="👎" label="thumbs down" />
        </button>
      </section>
    );
  }

  handleClick = (vote) => {
    const { id, type } = this.props;
    api.patchVotes(vote, id, type);
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
  };
}

export default Votes;
