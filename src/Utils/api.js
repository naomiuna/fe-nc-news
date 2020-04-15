import axios from 'axios';
const request = axios.create({
  baseURL: 'https://nt-nc-news.herokuapp.com/api'
});

export const fetchTopics = () => {
  return request.get('/topics').then(({ data }) => {
    return data.topics;
  });
};
export const fetchArticles = (topic, author, sort_by) => {
  return request
    .get('/articles', { params: { topic, author, sort_by } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchArticleById = (article_id) => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchComments = (article_id) => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVotes = (inc_votes, id, type) => {
  return request.patch(`/${type}/${id}`, { inc_votes });
};

export const postComment = (newComment, id) => {
  return request
    .post(`/articles/${id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (id) => {
  return request.delete(`/comments/${id}`);
};

export const fetchUser = (username) => {
  return request.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};
