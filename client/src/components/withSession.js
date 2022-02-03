import { useQuery } from '@apollo/client';
import Loading from './Loading';
import { GET_PROFILE } from '../graphql/index';

const withSession = (Component) => (props) => {
  const { data, refetch, loading } = useQuery(GET_PROFILE);

  if (loading) return <Loading />;
  return <Component {...props} refetch={refetch} session={data} />;
};

export default withSession;
