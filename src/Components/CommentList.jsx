import React from 'react';
import * as api from '../Utils/api';
import Loading from './Loading';
import { formatDates } from '../Utils/utils';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';

class CommentList extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };
  componentDidMount() {
    this.getComments();
  }
  render() {
    const { comments, isLoading } = this.state;
    const { comment_count, loggedInUser } = this.props;
    if (isLoading) return <Loading />;
    return (
      <section>
        <h3>Comments ({comment_count})</h3>
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
          return <CommentCard key={comment_id} {...comment} />;
        })}
      </section>
    );
  }

  getComments = () => {
    api.fetchComments(this.props.article_id).then((comments) => {
      const formattedComments = formatDates(comments);
      this.setState({ comments: formattedComments, isLoading: false });
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
}

export default CommentList;
