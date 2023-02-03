import styled from 'styled-components';

export const Chile = styled.div`
  aspect-ratio: 16/9;
  position: relative;
  background: linear-gradient(white 50%, red 50%);

  &::before {
    content: '';
    height: 50%;

    position: absolute;
    top: 0;
    left: 0;

    aspect-ratio: 1;

    background-color: blue;
  }

  &::after {
    content: '';
    width: 100%;
    height: 50%;

    position: absolute;
    top: 0;
    left: 0;

    clip-path: polygon(
      7.46% 42.57%,
      12.51% 42.5%,
      14.15% 25.21%,
      15.8% 42.5%,
      20.92% 42.75%,
      16.84% 53.53%,
      18.67% 72.06%,
      14.26% 60.54%,
      9.75% 72.01%,
      11.65% 53.76%
    );
    aspect-ratio: 1;

    background-color: white;
  }
`;
