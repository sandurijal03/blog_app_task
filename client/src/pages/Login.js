import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Loading from '../components/Loading';
import Error from '../components/Error';

const loginUser = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [login, { error, loading }] = useMutation(loginUser, {
    variables: {
      email,
      password,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    login().then(async ({ data }) => {
      localStorage.setItem('auth_token', data.login);
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
            type='email'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default Login;
