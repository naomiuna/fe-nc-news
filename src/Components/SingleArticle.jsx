import React from 'react';
import * as api from '../Utils/api';
import Loading from './Loading';
import formatDates from '../Utils/utils';
import { Link } from '@reach/router';
import CommentList from './CommentList';
import Votes from './Votes';
import Error from './Error';

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
      <main>
        <article>
          <h3>{title}</h3>
          <p>
            <Link to={`/topics/${topic}`}>{topic}</Link>
            posted by <Link to={`/${author}/articles`}>{author}</Link>{' '}
            {created_at}
          </p>
          <p>{body}</p>
          <Votes votes={votes} id={article_id} type={'articles'} />
        </article>
        <CommentList article_id={article_id} loggedInUser={loggedInUser} />
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
