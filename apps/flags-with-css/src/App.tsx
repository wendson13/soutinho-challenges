import { Brazil } from '@components/flags/brazil';
import { Chile } from '@components/flags/chile';
import { China } from '@components/flags/china';
import { Japan } from '@components/flags/japan';
import { Container, Flags, Title } from './app.styles';

export function App() {
  return (
    <Container>
      <Title>Drawing with CSS : Flags</Title>
      <Flags>
        <Japan />
        <Brazil />
        <Chile />
        <China />
      </Flags>
    </Container>
  );
}
