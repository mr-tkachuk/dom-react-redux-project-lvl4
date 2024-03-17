import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import signup from './signup.jpg';
import RegistrationForm from '../features/RegistrationForm/RegistrationForm';
import { authDataSelector } from '../entities/User/selectors';

const Registration = () => {
  const authData = useSelector(authDataSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (authData) {
      navigate('/');
    }
  }, [authData]);
  return (
    <Container className="d-flex justify-content-center align-items-center h-100" fluid>
      <Card className="shadow-sm col-12 col-md-8 col-xxl-6">
        <Card.Body className="row p-5">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={signup} alt="Картинка" className="rounded-circle" />
          </div>
          <RegistrationForm />
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Registration;
