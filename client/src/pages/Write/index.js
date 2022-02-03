import React from 'react';
import withAuth from '../../components/withAuth';
import withSession from '../../components/withSession';

const Write = () => {
  return (
    <div>
      <h1>Write</h1>
    </div>
  );
};

export default withAuth(Write);
