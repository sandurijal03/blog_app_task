import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { GET_PROFILE } from '../graphql/index';
import { useEffect } from 'react';

const Redirect = ({ getProfile }) => {
  const navigate = useNavigate('/');

  useEffect(() => {
    if (getProfile === null) {
      navigate('/');
    }
  });
  return null;
};

const withAuth = (conditionalFunc) => (Component) => (props) => {
  const { data, loading } = useQuery(GET_PROFILE);
  if (loading) return <Loading />;

  const getProfile = data.getProfile;

  return conditionalFunc(data) ? (
    <Component {...props} />
  ) : (
    <Redirect getProfile={getProfile} />
  );
};

export default withAuth;
