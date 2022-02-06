import React from 'react';

const UserInfo = ({ session }) => {
  const { avatar, username } = session.getProfile;
  return (
    <div>
      <h3>User Info</h3>
      <img src={avatar} alt='' />
      <p>Username: {username}</p>
    </div>
  );
};

export default UserInfo;
