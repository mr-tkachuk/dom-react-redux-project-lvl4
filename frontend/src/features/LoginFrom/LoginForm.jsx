import { Formik } from 'formik';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import loginByUsername from './loginByUsername';
import { loginFormActions } from './loginFormSlice';

export default function LoginForm() {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.loginForm.error);
  const { t } = useTranslation();
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(data) => {
        dispatch(loginByUsername(data));
      }}
      initialValues={{
        username: '',
        password: '',
      }}
    >
      {
        ({
          handleSubmit, handleChange, values,
        }) => {
          const handleChangeWithReset = (data) => {
            if (error) {
              dispatch(loginFormActions.resetError());
            }
            handleChange(data);
          };
          return (
            <Form
              onSubmit={handleSubmit}
              className="col-12 col-md-6 mt-3 mt-mb-0"
            >
              <h1 className="text-center mb-4">{t('signIn')}</h1>
              <Form.Group>
                <FloatingLabel
                  controlId="sign-in-username"
                  label={t('yourName')}
                  className="mb-3"
                >
                  <Form.Control
                    autoFocus
                    type="text"
                    name="username"
                    placeholder={t('yourName')}
                    value={values.username}
                    onChange={handleChangeWithReset}
                    isInvalid={!!error}
                    required
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group>
                <FloatingLabel
                  controlId="sign-in-pass"
                  label={t('password')}
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder={t('password')}
                    value={values.password}
                    onChange={handleChangeWithReset}
                    isInvalid={!!error}
                    required
                    autoComplete="on"
                  />
                  <Form.Control.Feedback tooltip type="invalid">
                    { error }
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Button className="w-100 mb-3" variant="outline-primary" type="submit">
                {t('signIn')}
              </Button>
            </Form>
          );
        }
      }
    </Formik>
  );
}
