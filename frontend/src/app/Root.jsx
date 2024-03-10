import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../widgets/Header';

export default function Root() {
  return (
    <div className="vh-100">
      <Header />
      <Container className="h-100">
        <Outlet />
      </Container>
    </div>
  );
}
