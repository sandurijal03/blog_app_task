import styled from 'styled-components';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #090707;

  .arrow {
    width: 0;
    height: 0;
    margin: 0 (-12px / 2);
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: (12px * 1.8) solid #fd7000;
    animation: blink 1 + s infinite;
    filter: drop-shadow(0 0 (12px * 1.5) #fd7000);

    &.down {
      transform: rotate(180deg);
    }

    @for $i from 1 through 18 {
      &.outer-#{$i} {
        animation-delay: -(1 / 18) * $i + s;
      }
    }

    @for $i from 1 through 6 {
      &.inner-#{$i} {
        animation-delay: -(1 / 6) * $i + s;
      }
    }
  }

  @keyframes blink {
    0% {
      opacity: 0.1;
    }
    30% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

export { Row, Loader, Container };
