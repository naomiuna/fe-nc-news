import React from 'react';
import { Link } from '@reach/router';
import Votes from './Votes';

const CommentCard = ({ comment_id, body, votes, author, created_at }) => {
  return (
    <article>
      <p>
        posted by <Link to={`/${author}`}>{author}</Link> {created_at}
      </p>
      <p>{body}</p>
      <Votes votes={votes} id={comment_id} type={'comments'} />
    </article>
  );
};

export default CommentCard;
