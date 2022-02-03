import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { GET_PROFILE } from '../graphql/index';

const withAuth = (conditionalFunc) => (Component) => (props) => {
  const { data, loading } = useQuery(GET_PROFILE);
  const navigate = useNavigate();
  if (loading) return <Loading />;
  return conditionalFunc(data) ? (
    <Component {...props} />
  ) : (
    navigate('/', { replace: true })
  );
};

export default withAuth;
