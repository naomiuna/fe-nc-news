import React from 'react';
import { Link } from '@reach/router';

const CommentCard = ({ comment_id, body, votes, author, created_at }) => {
  return (
    <article>
      <p>
        posted by <Link to={`/${author}`}>{author}</Link> {created_at}
      </p>
      <p>{body}</p>
    </article>
  );
};

export default CommentCard;
