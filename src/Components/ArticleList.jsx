import React from 'react';
import * as api from '../Utils/api';
import Loading from './Loading';
import ArticleCard from './ArticleCard';
import { formatDates } from '../Utils/utils';

class ArticleList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticles();
    }
  }

  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) return <Loading />;
    return (
      <main className="Main">
        {this.props.topic ? <h2>{this.props.topic}</h2> : <h2>all articles</h2>}
        {articles.map((article) => {
          const { article_id } = article;
          return <ArticleCard key={article_id} {...article} />;
        })}
      </main>
    );
  }

  getArticles = () => {
    api.fetchArticles(this.props.topic).then((articles) => {
      const formattedArticles = formatDates(articles);
      this.setState({
        articles: formattedArticles,
        isLoading: false
      });
    });
  };
}

export default ArticleList;
