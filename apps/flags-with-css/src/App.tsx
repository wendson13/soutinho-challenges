import github from '@assets/github-logo.svg';
import { Brazil } from '@components/flags/brazil';
import { Chile } from '@components/flags/chile';
import { China } from '@components/flags/china';
import { Japan } from '@components/flags/japan';
import { Container, Flags, GithubLink, Title } from './app.styles';

export function App() {
  return (
    <Container>
      <GithubLink
        href="https://github.com/wendson13/soutinho-challenges/tree/main/apps/flags-with-css"
        target="_blank"
        title="Repository"
      >
        <img src={github} alt="Github logo" />
      </GithubLink>

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
