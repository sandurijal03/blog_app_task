import { ApolloConsumer } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { Button } from './style';

const Logout = () => {
  const navigate = useNavigate();
  const handleClick = (client) => {
    localStorage.setItem('auth_token', '');
    client.resetStore();
    navigate('/');
  };
  return (
    <ApolloConsumer>
      {(client) => {
        return <Button onClick={() => handleClick(client)}>Logout</Button>;
      }}
    </ApolloConsumer>
  );
};

export default Logout;
