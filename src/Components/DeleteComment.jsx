import React from 'react';
import styles from './DeleteComment.module.css';

const DeleteComment = ({ id, handleDelete }) => {
  return (
    <div>
      <button className={styles.button} onClick={() => handleDelete(id)}>
        delete comment
      </button>
    </div>
  );
};

export default DeleteComment;
