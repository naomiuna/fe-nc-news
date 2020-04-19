import React from 'react';
import * as api from '../Utils/api';
import Loading from './Loading';
import formatDates from '../Utils/utils';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';
import Error from './Error';
import styles from './CommentList.module.css';

class CommentList extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    err: null
  };
  componentDidMount() {
    this.getComments();
  }
  render() {
    const { comments, isLoading, err } = this.state;
    const { loggedInUser } = this.props;
    if (err) return <Error {...err} />;
    if (isLoading) return <Loading />;
    return (
      <section className={styles.commentList}>
        <h3>Comments ({comments.length})</h3>
        {!loggedInUser ? (
          <section>
            <p>You must be logged in to comment</p>
          </section>
        ) : (
          <CommentAdder
            loggedInUser={loggedInUser}
            handleNewComment={this.handleNewComment}
          />
        )}
        {comments.map((comment) => {
          const { comment_id } = comment;
          return (
            <CommentCard
              key={comment_id}
              {...comment}
              handleDelete={this.handleDelete}
              loggedInUser={loggedInUser}
            />
          );
        })}
      </section>
    );
  }

  getComments = () => {
    api
      .fetchComments(this.props.article_id)
      .then((comments) => {
        const formattedComments = formatDates(comments);
        this.setState({ comments: formattedComments, isLoading: false });
      })
      .catch((err) => {
        const { status, data } = err.response;
        this.setState({ err: { status, msg: data.msg }, isLoading: false });
      });
  };

  handleNewComment = (newComment) => {
    api.postComment(newComment, this.props.article_id).then((comment) => {
      this.setState((currentState) => {
        const formattedComment = formatDates(comment);
        return { comments: [formattedComment, ...currentState.comments] };
      });
    });
  };

  handleDelete = (id) => {
    api.deleteComment(id).then(() => {
      this.getComments();
    });
  };
}

export default CommentList;
