import React, { useState } from 'react';
import { apiSlice } from '../api/apiSlice';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { isLoading, isError, data }] =
    apiSlice.endpoints.login.useMutation();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login({ email, password });
      }}
    >
      <h2>Login</h2>

      {isError && <div>Error occurred while logging in</div>}

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
