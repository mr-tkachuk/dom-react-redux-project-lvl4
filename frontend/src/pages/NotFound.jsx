import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Header from '../widgets/Header/Header';

export default function NotFound() {
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
}
