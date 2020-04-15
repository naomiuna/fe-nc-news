import React from 'react';
import * as api from '../Utils/api';
import Loading from './Loading';
import { formatDates } from '../Utils/utils';
import { Link } from '@reach/router';
import CommentList from './CommentList';
import Votes from './Votes';

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    this.getArticleById();
  }

  render() {
    const {
      isLoading,
      article: {
        title,
        author,
        created_at,
        body,
        topic,
        article_id,
        votes,
        comment_count
      }
    } = this.state;
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
        <CommentList
          article_id={article_id}
          comment_count={comment_count}
          loggedInUser={loggedInUser}
        />
      </main>
    );
  }

  getArticleById = () => {
    api.fetchArticleById(this.props.article_id).then((article) => {
      const formattedArticle = formatDates(article);
      this.setState({ article: formattedArticle, isLoading: false });
    });
  };
}

export default SingleArticle;
