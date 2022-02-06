import React from 'react';
import { Container, Loader, Row } from './style';

const Loading = () => {
  return (
    <Container>
      <Loader>
        <Row>
          <div className='arrow up outer outer-18'></div>
          <div className='arrow down outer outer-17'></div>
          <div className='arrow up outer outer-16'></div>
          <div className='arrow down outer outer-15'></div>
          <div className='arrow up outer outer-14'></div>
        </Row>
        <Row>
          <div className='arrow up outer outer-1'></div>
          <div className='arrow down outer outer-2'></div>
          <div className='arrow up inner inner-6'></div>
          <div className='arrow down inner inner-5'></div>
          <div className='arrow up inner inner-4'></div>
          <div className='arrow down outer outer-13'></div>
          <div className='arrow up outer outer-12'></div>
        </Row>
        <Row>
          <div className='arrow down outer outer-3'></div>
          <div className='arrow up outer outer-4'></div>
          <div className='arrow down inner inner-1'></div>
          <div className='arrow up inner inner-2'></div>
          <div className='arrow down inner inner-3'></div>
          <div className='arrow up outer outer-11'></div>
          <div className='arrow down outer outer-10'></div>
        </Row>
        <Row>
          <div className='arrow down outer outer-5'></div>
          <div className='arrow up outer outer-6'></div>
          <div className='arrow down outer outer-7'></div>
          <div className='arrow up outer outer-8'></div>
          <div className='arrow down outer outer-9'></div>
        </Row>
      </Loader>
    </Container>
  );
};

export default Loading;
