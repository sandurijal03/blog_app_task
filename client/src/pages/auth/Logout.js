import { ApolloConsumer } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

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
        return <button onClick={() => handleClick(client)}>Logout</button>;
      }}
    </ApolloConsumer>
  );
};

export default Logout;
