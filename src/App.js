import React from 'react';
import './styles/global.css';
import Title from './Components/Title';
import LogIn from './Components/LogIn';
import ArticleList from './Components/ArticleList';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import SingleArticle from './Components/SingleArticle';
import { Router } from '@reach/router';

class App extends React.Component {
  state = {
    loggedInUser: 'jessjelly'
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Title />
        <LogIn loggedInUser={loggedInUser} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="topics/:topic" />
          <ArticleList path=":author/articles" />
          <SingleArticle
            path="articles/:article_id"
            loggedInUser={loggedInUser}
          />
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
