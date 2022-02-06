import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import {
  RegisterBtn,
  Container,
  Buttons,
  Form,
  InputContainer,
  Input,
} from './style';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import { REGISTER_USER } from '../../../graphql';

const Register = ({ refetch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const [register, { loading, error }] = useMutation(REGISTER_USER, {
    variables: {
      username,
      password,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register().then(async ({ data }) => {
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
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
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
          <RegisterBtn>Register</RegisterBtn>
          <p>
            Already have account?
            <span>
              <Link to='/login'>Login</Link>
            </span>
          </p>
        </Buttons>
      </Form>
    </Container>
  );
};

export default Register;
