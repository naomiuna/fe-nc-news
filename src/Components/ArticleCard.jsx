import React from 'react';
import { Link } from '@reach/router';
import Votes from './Votes';
import styles from './ArticleCard.module.css';

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
    <article className={styles.articleCard}>
      <section className={styles.main}>
        <h3>
          {' '}
          <Link className={styles.aTitle} to={`/articles/${article_id}`}>
            {title}
          </Link>
        </h3>
        <p className={styles.body}>{body}</p>
        <p className={styles.info}>
          <Link className={styles.aInfo} to={`/topics/${topic}`}>
            {topic}
          </Link>{' '}
          posted by{' '}
          <Link className={styles.aInfo} to={`/${author}/articles`}>
            {author}
          </Link>{' '}
          {created_at}
        </p>
      </section>
      <Votes
        className={styles.votes}
        votes={votes}
        id={article_id}
        type={'articles'}
      />
    </article>
  );
};

export default ArticleCard;
