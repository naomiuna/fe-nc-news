import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="http://github.com/naomiuna"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-github-square fa-3x"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/naomi-todd"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-linkedin fa-3x"></i>
      </a>
    </footer>
  );
};

export default Footer;
