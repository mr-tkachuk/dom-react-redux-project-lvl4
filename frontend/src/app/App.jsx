import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from '../widgets/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        Сашка Курсаков - молодец!
      </Container>
    </>
  );
}

export default App;
