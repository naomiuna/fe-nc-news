import React from 'react';
import Loading from './Loading';
import { Link } from '@reach/router';
import * as api from '../Utils/api';

class NavBar extends React.Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    const { isLoading, topics } = this.state;
    if (isLoading) return <Loading />;
    return (
      <nav className="Nav">
        <Link to="/">Home</Link>
        {topics.map(({ slug }) => {
          return (
            <Link to={`/topics/${slug}`} key={slug}>
              {slug}
            </Link>
          );
        })}
      </nav>
    );
  }

  getTopics = () => {
    api.fetchTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export default NavBar;
