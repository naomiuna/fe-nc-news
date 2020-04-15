import React from 'react';

const LogIn = (props) => {
  const { loggedInUser } = props;
  return (
    <section className="logIn">
      {loggedInUser ? <p>{loggedInUser}</p> : <p>log in button...</p>}
    </section>
  );
};

export default LogIn;
