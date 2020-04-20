import React from 'react';
import styles from './LogIn.module.css';

class LogIn extends React.Component {
  state = {
    username: ''
  };
  render() {
    const { err, loggedInUser, avatar_url, handleSignOut } = this.props;
    const { username } = this.state;
    return (
      <section className={styles.logIn}>
        {loggedInUser ? (
          <>
            <p>{loggedInUser}</p>
            <img
              src={avatar_url}
              className={styles.avatar}
              alt="profile avatar"
            ></img>
            <button
              className={styles.signOutButton}
              onClick={() => handleSignOut()}
            >
              sign out
            </button>
          </>
        ) : (
          <form onSubmit={this.handleSubmit}>
            {err && <p className={styles.error}>username not registered</p>}
            <p>Sign in</p>
            <label>
              Username:{' '}
              <select onChange={this.handleChange} value={username} type="text">
                <option value="">select a user</option>
                <option value="weegembump">weegembump</option>
                <option value="happyamy2016">happyamy2016</option>
                <option value="jessjelly">jessjelly</option>
                <option value="grumpy19">grumpy19</option>
                <option value="tickle122">tickle122</option>
                <option value="cooljmessy">cooljmessy</option>
              </select>
            </label>
            <button className={styles.signInButton}>sign in</button>
          </form>
        )}
      </section>
    );
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ username: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username } = this.state;
    const { handleLogIn } = this.props;
    handleLogIn(username);
    this.setState({ username: '' });
  };
}

export default LogIn;
