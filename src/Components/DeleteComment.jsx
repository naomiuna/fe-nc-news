import React from 'react';

const DeleteComment = ({ id, handleDelete }) => {
  return (
    <div>
      <button onClick={() => handleDelete(id)}>delete comment</button>
    </div>
  );
};

export default DeleteComment;
