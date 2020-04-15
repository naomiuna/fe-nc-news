import React from 'react';
import Loading from './Loading';
import { Link } from '@reach/router';
import * as api from '../Utils/api';
import Emoji from './Emoji';

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
        <Link className="nav-link" to="/">
          Home
        </Link>
        {topics.map(({ slug, description }) => {
          return (
            <Link
              to={`/topics/${slug}`}
              className="nav-link"
              key={slug}
              state={{ description }}
            >
              {slug}
              {slug === 'coding' && (
                <Emoji
                  symbol="🧑🏻‍💻"
                  label="person on laptop"
                  desciption={description}
                />
              )}
              {slug === 'football' && <Emoji symbol="⚽️" label="football" />}
              {slug === 'cooking' && <Emoji symbol="🧑🏾‍🍳" label="chef" />}
              <br />
              {/* {description} */}
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
