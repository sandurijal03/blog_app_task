import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import {
  Buttons,
  Input,
  InputContainer,
  LoginBtn,
  Container,
  Form,
} from './style';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import { LOGIN_USER } from '../../../graphql';

const Login = ({ refetch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
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
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type='username'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputContainer>
          <Input
            type={show ? 'text' : 'password'}
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={handleClick}>
            {show ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </InputContainer>
        <Buttons>
          <LoginBtn>Login</LoginBtn>
          <p>
            Doesn't have account?
            <span>
              <Link to='/register'>Register</Link>
            </span>
          </p>
        </Buttons>
      </Form>
    </Container>
  );
};

export default Login;
