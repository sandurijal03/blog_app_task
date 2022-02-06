import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_POSTS } from '../../graphql';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { Container } from './style';
import Cards from './Cards';
import Hero from '../../components/Hero';
import Wrapper from '../../components/Wrapper';

const Home = ({ refetch }) => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const posts = data.getAllPost;

  return (
    <Wrapper>
      <Container>
        <Hero />
        <Cards posts={posts} refetch={refetch} />
      </Container>
    </Wrapper>
  );
};

export default Home;
