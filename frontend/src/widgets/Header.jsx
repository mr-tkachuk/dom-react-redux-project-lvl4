import { Container, Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}
