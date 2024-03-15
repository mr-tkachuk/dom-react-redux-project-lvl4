import { Button, Container, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authDataSelector } from '../../entities/User/selectors';
import { userActions } from '../../entities/User/userSlice';

export default function Header() {
  const authData = useSelector(authDataSelector);
  const dispatch = useDispatch();
  return (
    <Navbar className="bg-white shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
        { authData
            && (
            <Button onClick={() => dispatch(userActions.logout())}>
              Выйти
            </Button>
            )}
      </Container>
    </Navbar>
  );
}
