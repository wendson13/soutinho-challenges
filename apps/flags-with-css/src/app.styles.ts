import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: grid;
  align-items: center;
  padding: 2rem 0;
  background: ${(props) => props.theme.colors.neutral[900]};
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.neutral['050']};
`;

export const Flags = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.3fr;
  justify-content: center;
  gap: 3rem;
  padding: 3rem;
`;
