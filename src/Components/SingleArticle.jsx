import React from 'react';
import * as api from '../Utils/api';
import Loading from './Loading';
import { formatDates } from '../Utils/utils';
//comments
//votes

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    this.getArticleById();
  }

  render() {
    return <main>article here</main>;
  }

  getArticleById = () => {
    api.fetchArticleById(this.props.article_id).then((article) => {
      const formattedArticles = formatDates([article]);
      this.setState({ article: formattedArticles[0], isLoading: false });
    });
  };
}

export default SingleArticle;
