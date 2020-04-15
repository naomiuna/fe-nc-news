import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = ({
  article_id,
  title,
  body,
  votes,
  topic,
  author,
  created_at
}) => {
  return (
    <article>
      <h3>
        {' '}
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h3>
      <p>{body}</p>
      <p>
        <Link to={`/topics/${topic}`}>{topic}</Link>
        posted by <Link to={`/${author}`}>{author}</Link> {created_at}
      </p>
    </article>
  );
};

export default ArticleCard;
