import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  margin: 0 auto;
  background: #1b2240;
`;

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
