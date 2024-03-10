import { Formik } from 'formik';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import * as yup from 'yup';

export default function LoginForm() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        password: '',
      }}
    >
      {
        ({
          handleSubmit, handleChange, values,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="col-12 col-md-6 mt-3 mt-mb-0"
          >
            <h1 className="text-center mb-4">Войти</h1>
            <Form.Group>
              <FloatingLabel
                controlId="sign-in-name"
                label="Ваш ник"
                className="mb-3"
              >
                <Form.Control
                  autoFocus
                  type="text"
                  name="name"
                  placeholder="Ваш ник"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                controlId="sign-in-pass"
                label="Пароль"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Ваш ник"
                  value={values.password}
                  onChange={handleChange}
                  required
                  autoComplete="on"
                />
              </FloatingLabel>
            </Form.Group>
            <Button className="w-100 mb-3" variant="outline-primary" type="submit">
              Войти
            </Button>
          </Form>
        )
      }
    </Formik>
  );
}
