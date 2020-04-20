import React from 'react';
import styles from './CommentAdder.module.css';

class CommentAdder extends React.Component {
  state = {
    username: '',
    body: ''
  };

  render() {
    const { loggedInUser } = this.props;
    const { body } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          <p>Comment as {loggedInUser}:</p>
          <br />
          <textarea
            required
            value={body}
            onChange={this.handleInput}
            type="textarea"
            placeholder="be nice!"
            className={styles.input}
          ></textarea>
        </label>
        <button className={styles.button}>comment</button>
      </form>
    );
  }

  handleInput = (event) => {
    const { value } = event.target;
    const { loggedInUser } = this.props;
    this.setState({ username: loggedInUser, body: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleNewComment(this.state);
    this.setState({ username: '', body: '' });
  };
}

export default CommentAdder;
