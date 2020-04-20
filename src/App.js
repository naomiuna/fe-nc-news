import React from 'react';
import './styles/global.css';
import Title from './Components/Title';
import LogIn from './Components/LogIn';
import ArticleList from './Components/ArticleList';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import SingleArticle from './Components/SingleArticle';
import Error from './Components/Error';
import { Router } from '@reach/router';
import * as api from './Utils/api';

class App extends React.Component {
  state = {
    loggedInUser: null,
    avatar_url: null,
    err: null
  };

  render() {
    const { loggedInUser, avatar_url, err } = this.state;
    return (
      <div className="App">
        <Title />
        <LogIn
          loggedInUser={loggedInUser}
          avatar_url={avatar_url}
          err={err}
          handleLogIn={this.handleLogIn}
          handleSignOut={this.handleSignOut}
        />
        <NavBar />
        <Router className="Main">
          <ArticleList path="/" />
          <ArticleList path="topics/:topic" />
          <ArticleList path=":author/articles" />
          <SingleArticle
            path="articles/:article_id"
            loggedInUser={loggedInUser}
          />
          <Error default />
        </Router>
        <Footer />
      </div>
    );
  }

  handleLogIn = (username) => {
    api
      .fetchUser(username)
      .then((user) => {
        const { username, avatar_url } = user;
        this.setState({ loggedInUser: username, avatar_url, err: false });
      })
      .catch((err) => {
        this.setState({
          err: true,
          isLoading: false
        });
      });
  };
  handleSignOut = () => {
    this.setState({ loggedInUser: null, avatar_url: null });
  };
}

export default App;
