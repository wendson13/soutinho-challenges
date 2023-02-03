import styled from 'styled-components';

export const Brazil = styled.div`
  aspect-ratio: 16/9;
  position: relative;
  background: green;

  &::before {
    content: '';
    width: 85%;
    height: 93%;

    position: absolute;
    top: 50%;
    left: 8%;

    clip-path: polygon(49.39% 2px, 98.73% 49.86%, 49.48% 99.79%, 10px 50%);
    transform: translate(0, -50%);
    aspect-ratio: 1;

    background-color: yellow;
  }

  &::after {
    content: '';
    width: 35%;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    border-radius: 9999rem;
    aspect-ratio: 1;

    background-color: blue;
  }
`;
