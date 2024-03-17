import {
  Button, ButtonGroup, Container, Navbar,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { authDataSelector } from '../../entities/User/selectors';
import { userActions } from '../../entities/User/userSlice';
import filter from '../../shared/leoProfanity/leoProfanity';

export default function Header() {
  const authData = useSelector(authDataSelector);
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    filter.loadDictionary(lang);
  };
  return (
    <Navbar className="bg-white shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link
            className="logo"
            to="/"
          >
            Hexlet Chat
          </Link>
        </Navbar.Brand>
        <ButtonGroup>
          <Button onClick={() => changeLang('ru')}>Ru</Button>
          <Button onClick={() => changeLang('en')}>En</Button>
        </ButtonGroup>
        { authData
            && (
            <Button
              onClick={() => dispatch(userActions.logout())}
              variant="primary"
            >
              {t('exit')}
            </Button>
            )}
      </Container>
    </Navbar>
  );
}
