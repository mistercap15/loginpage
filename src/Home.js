import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <p>Please choose an option below:</p>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/users">
          <button>User</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
