import React from 'react';

class LogIn extends React.Component {
  state = {
    username: ''
  };
  render() {
    const { loggedInUser, avatar_url, handleSignOut } = this.props;
    const { username } = this.state;
    return (
      <section>
        {loggedInUser ? (
          <>
            <p>{loggedInUser}</p>
            <img src={avatar_url} className="avatar" alt="profile avatar"></img>
            <button onClick={() => handleSignOut()}>sign out</button>
          </>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <p>Sign in</p>
            <label>
              Username :{' '}
              <input
                onChange={this.handleChange}
                value={username}
                type="text"
              ></input>
            </label>
            <button>sign in</button>
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
