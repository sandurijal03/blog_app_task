import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { LOGIN_USER } from '../../graphql';

const Login = ({ refetch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [login, { error, loading }] = useMutation(LOGIN_USER, {
    variables: {
      username,
      password,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    login().then(async ({ data }) => {
      localStorage.setItem('auth_token', data.login.token);
      await refetch();
      navigate('/');
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='username'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
