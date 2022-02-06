import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Info = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img`
  width: 400px;
`;

const UserInfo = ({ session }) => {
  const { avatar, username } = session.getProfile;
  return (
    <Container>
      <h3>User Info</h3>
      <Info>
        <p>Username: {username}</p>
        <Image src={avatar} alt='' />
      </Info>
    </Container>
  );
};

export default UserInfo;
