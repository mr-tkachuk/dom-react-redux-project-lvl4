import { Container } from 'react-bootstrap';
import Header from '../widgets/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <main>
          Страница не существует
        </main>
      </Container>
    </>
  );
}
