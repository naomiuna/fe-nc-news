import React from 'react';
import { Link } from '@reach/router';
import Votes from './Votes';
import DeleteComment from './DeleteComment';
import styles from './CommentCard.module.css';

const CommentCard = ({
  comment_id,
  body,
  votes,
  author,
  created_at,
  handleDelete,
  loggedInUser
}) => {
  return (
    <article className={styles.commentCard}>
      <section className={styles.body}>
        <p>
          posted by{' '}
          <Link className={styles.aInfo} to={`/${author}/articles`}>
            {author}
          </Link>{' '}
          {created_at}
        </p>
        <br />
        <p>{body}</p>
        {loggedInUser === author && (
          <DeleteComment id={comment_id} handleDelete={handleDelete} />
        )}
      </section>
      <Votes votes={votes} id={comment_id} type={'comments'} />
    </article>
  );
};

export default CommentCard;
