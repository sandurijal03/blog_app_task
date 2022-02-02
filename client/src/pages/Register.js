import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import Loading from '../components/Loading';
import Error from '../components/Error';

const registerUser = gql`
  mutation ($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password)
  }
`;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, { loading, error }] = useMutation(registerUser, {
    variables: {
      name,
      email,
      password,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register().then(async ({ data }) => {
      console.log(data);
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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

export default Register;
