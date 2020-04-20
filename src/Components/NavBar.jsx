import React from 'react';
import Loading from './Loading';
import { Link } from '@reach/router';
import * as api from '../Utils/api';
import Emoji from './Emoji';
import Error from './Error';
import styles from './NavBar.module.css';

class NavBar extends React.Component {
  state = {
    topics: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    const { isLoading, topics, err } = this.state;
    if (err) return <Error {...err} />;
    if (isLoading) return <Loading height={20} width={20} />;
    return (
      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/">
          Home{' '}
          <>
            {' '}
            <Emoji symbol="🏠" label="house building" />
          </>
        </Link>
        {topics.map(({ slug, description }) => {
          return (
            <Link
              to={`/topics/${slug}`}
              className={styles.navLink}
              key={slug}
              state={{ description }}
            >
              {slug}
              {slug === 'coding' && (
                <>
                  {' '}
                  <Emoji
                    symbol="🧑🏻‍💻"
                    label="person on laptop"
                    desciption={description}
                  />
                </>
              )}
              {slug === 'football' && (
                <>
                  {' '}
                  <Emoji symbol="⚽️" label="football" />
                </>
              )}
              {slug === 'cooking' && (
                <>
                  {' '}
                  <Emoji symbol="🧑🏾‍🍳" label="chef" />
                </>
              )}
              <br />
            </Link>
          );
        })}
      </nav>
    );
  }

  getTopics = () => {
    api
      .fetchTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false });
      })
      .catch((err) => {
        const { status, data } = err.response;
        this.setState({ err: { status, msg: data.msg }, isLoading: false });
      });
  };
}

export default NavBar;
