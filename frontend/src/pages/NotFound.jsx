import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Header from '../widgets/Header/Header';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Container>
        <main>
          {t('notFound')}
        </main>
      </Container>
    </>
  );
};
export default NotFound;
