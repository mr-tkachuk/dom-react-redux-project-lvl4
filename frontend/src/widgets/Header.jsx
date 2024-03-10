import { Container, Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <header>
      <Navbar className="bg-white">
        <Container>
          <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
          { location.pathname !== '/login'
            && <Navbar.Brand href="/login">Sign In</Navbar.Brand>}
        </Container>
      </Navbar>
    </header>
  );
}
