import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { REGISTER_USER } from '../../graphql';

const Register = ({ refetch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [register, { loading, error }] = useMutation(REGISTER_USER, {
    variables: {
      username,
      password,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register().then(async ({ data }) => {
      console.log(data);
      toast.success(data.register);
      await refetch();
      setTimeout(() => {
        navigate('/login');
      }, 5000);
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
            placeholder='username'
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
