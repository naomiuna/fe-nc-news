import React from 'react';
import * as api from '../Utils/api';
import Loading from './Loading';
import formatDates from '../Utils/utils';
import { Link } from '@reach/router';
import CommentList from './CommentList';
import Votes from './Votes';
import Error from './Error';
import styles from './SingleArticle.module.css';

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.getArticleById();
  }

  render() {
    const {
      isLoading,
      article: { title, author, created_at, body, topic, article_id, votes },
      err
    } = this.state;
    if (err) return <Error {...err} />;
    if (isLoading) return <Loading />;
    const { loggedInUser } = this.props;
    return (
      <main className={styles.articleSection}>
        <main className={styles.article}>
          <article className={styles.main}>
            <h3>{title}</h3>
            <p>
              <Link to={`/topics/${topic}`}>{topic}</Link> posted by{' '}
              <Link to={`/${author}/articles`}>{author}</Link> {created_at}
            </p>
            <br />
            <p className={styles.body}>{body}</p>
          </article>
          <Votes
            className={styles.vote}
            votes={votes}
            id={article_id}
            type={'articles'}
          />
          <CommentList article_id={article_id} loggedInUser={loggedInUser} />
        </main>
      </main>
    );
  }

  getArticleById = () => {
    api
      .fetchArticleById(this.props.article_id)
      .then((article) => {
        const formattedArticle = formatDates(article);
        this.setState({ article: formattedArticle, isLoading: false });
      })
      .catch((err) => {
        const { status, data } = err.response;
        this.setState({ err: { status, msg: data.msg }, isLoading: false });
      });
  };
}

export default SingleArticle;
