import { Card } from 'react-bootstrap';
import signup from './signup.jpg';
import RegistrationForm from '../features/RegistrationForm';

export default function Registration() {
  return (
    <main className="d-flex justify-content-center align-items-center h-100">
      <Card className="shadow-sm col-12 col-md-8 col-xxl-6">
        <Card.Body className="row p-5">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={signup} alt="Картинка" className="rounded-circle" />
          </div>
          <RegistrationForm />
        </Card.Body>
      </Card>
    </main>
  );
}
