import styled from 'styled-components';

export const Japan = styled.div`
  aspect-ratio: 16/9;
  position: relative;
  background: white;

  &::after {
    content: '';
    width: 30%;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    border-radius: 9999rem;
    aspect-ratio: 1;

    background-color: red;
  }
`;
