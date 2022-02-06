import React from 'react';
import withAuth from '../../components/withAuth';
import Wrapper from '../../components/Wrapper';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import UserPost from './UserPost';

const Container = styled.div`
  width: 1540px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #060f2f;
  padding: 10px;
  color: white;
`;

const Profile = ({ session }) => {
  console.log(session);
  return (
    <Wrapper>
      <Container>
        <UserInfo session={session} />
        <UserPost username={session.getProfile.username} />
      </Container>
    </Wrapper>
  );
};

export default withAuth((session) => session && session.getProfile)(Profile);
