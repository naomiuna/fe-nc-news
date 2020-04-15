import React from 'react';
import { Link } from '@reach/router';
import Votes from './Votes';
import DeleteComment from './DeleteComment';

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
    <article>
      <p>
        posted by <Link to={`/${author}`}>{author}</Link> {created_at}
      </p>
      <p>{body}</p>
      {loggedInUser === author && (
        <DeleteComment id={comment_id} handleDelete={handleDelete} />
      )}
      <Votes votes={votes} id={comment_id} type={'comments'} />
    </article>
  );
};

export default CommentCard;
