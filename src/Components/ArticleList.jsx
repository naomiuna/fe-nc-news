import React from 'react';
import * as api from '../Utils/api';
import Loading from './Loading';
import ArticleCard from './ArticleCard';
import { formatDates } from '../Utils/utils';
import SortArticles from './SortArticles';

class ArticleList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: ''
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.topic !== this.props.topic ||
      prevProps.author !== this.props.author ||
      prevState.sort_by !== this.state.sort_by
    ) {
      this.getArticles();
    }
  }

  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) return <Loading />;
    return (
      <main className="Main">
        {this.props.topic ? (
          <h2>{this.props.topic}</h2>
        ) : this.props.author ? (
          <h2>{this.props.author}'s articles</h2>
        ) : (
          <h2>all articles</h2>
        )}
        <SortArticles handleSort={this.handleSort} />
        {articles.map((article) => {
          const { article_id } = article;
          return <ArticleCard key={article_id} {...article} />;
        })}
      </main>
    );
  }

  getArticles = () => {
    api
      .fetchArticles(this.props.topic, this.props.author, this.state.sort_by)
      .then((articles) => {
        const formattedArticles = formatDates(articles);
        this.setState({
          articles: formattedArticles,
          isLoading: false
        });
      });
  };

  handleSort = (sort_by) => {
    this.setState({ sort_by });
  };
}

export default ArticleList;
