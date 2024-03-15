import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import signUp from './signUp';

export default function RegistrationForm() {
  const schema = yup.object().shape({
    name: yup.string().required('Обязательное поле').min(3, 'От 3 до 20 символов').max(20, 'От 3 до 20 символов'),
    password: yup.string().min(6, 'Не менее 6 символов').required('Обязательное поле'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать').required('Обязательное поле'),
  });

  const dispatch = useDispatch();
  const error = useSelector((state) => state.registrationForm.error);
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(data) => {
        const { name, password } = data;
        dispatch(signUp({ username: name, password }));
      }}
      initialValues={{
        name: '',
        password: '',
        confirmPassword: '',
      }}
    >
      {
        ({
          handleSubmit, handleChange, values, errors, touched,
        }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className="col-12 col-md-6 mt-3 mt-mb-0"
          >
            <h1 className="text-center mb-4">Регистрация</h1>
            <Form.Group
              controlId="sign-up-name"
              className="position-relative mb-3"
            >
              <FloatingLabel
                label="Имя пользователя"
              >
                <Form.Control
                  autoFocus
                  type="text"
                  name="name"
                  placeholder="Имя пользователя"
                  value={values.name}
                  isInvalid={(touched.name && !!errors.name) || error}
                  onChange={handleChange}
                  autoComplete="username"
                />
                <Form.Control.Feedback tooltip type="invalid">{errors.name || error}</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              controlId="sign-up-password"
              className="position-relative mb-3"
            >
              <FloatingLabel
                label="Пароль"
              >
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={touched.password && !!errors.password}
                  autoComplete="new-password"
                  required
                />
                <Form.Control.Feedback tooltip type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              controlId="sign-up-confirm-password"
              className="position-relative mb-3"
            >
              <FloatingLabel
                label="Повторите пароль"
              >
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Повторите пароль"
                  value={values.confirmPassword}
                  isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />
                <Form.Control.Feedback tooltip type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Button className="w-100 mb-3" variant="outline-primary" type="submit">
              Зарегистрироваться
            </Button>
          </Form>
        )
      }
    </Formik>
  );
}
