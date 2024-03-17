import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import login from './login.jpeg';
import LoginForm from '../features/LoginFrom/LoginForm';
import { authDataSelector } from '../entities/User/selectors';

const Login = () => {
  const authData = useSelector(authDataSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (authData) {
      navigate('/');
    }
  }, [authData]);
  const { t } = useTranslation();
  return (
    <Container className="d-flex justify-content-center align-items-center h-100" fluid>
      <Card className="shadow-sm col-12 col-md-8 col-xxl-6">
        <Card.Body className="row p-5">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={login} alt="Картинка" className="rounded-circle" />
          </div>
          <LoginForm />
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center gap-2 p-4">
          <span>{ t('noAccount') }</span>
          <Link to="/signup">
            {t('signUp')}
          </Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};
export default Login;
