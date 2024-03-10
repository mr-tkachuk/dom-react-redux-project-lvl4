import { Card } from 'react-bootstrap';
import login from './login.jpeg';
import LoginForm from '../features/LoginForm';

export default function Login() {
  return (
    <main className="d-flex justify-content-center align-items-center h-100">
      <Card className="shadow-sm col-12 col-md-8 col-xxl-6">
        <Card.Body className="row p-5">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={login} alt="Картинка" className="rounded-circle" />
          </div>
          <LoginForm />
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center gap-2 p-4">
          <span>Нет аккаунта?</span>
          <Card.Link href="/signup">Регистрация</Card.Link>
        </Card.Footer>
      </Card>
    </main>
  );
}
