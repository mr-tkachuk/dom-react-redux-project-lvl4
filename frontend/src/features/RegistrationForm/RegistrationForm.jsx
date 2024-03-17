import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import signUp from './signUp';

export default function RegistrationForm() {
  const { t } = useTranslation();
  const schema = yup.object().shape({
    name: yup.string().required(t('required')).min(3, t('symbolsCount')).max(20, t('symbolsCount')),
    password: yup.string().min(6, t('passwordMinimum')).required(t('required')),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], t('passConfirm')).required(t('required')),
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
            <h1 className="text-center mb-4">{t('signUp')}</h1>
            <Form.Group
              controlId="name"
              className="position-relative mb-3"
            >
              <FloatingLabel
                label={t('username')}
              >
                <Form.Control
                  autoFocus
                  type="text"
                  name="name"
                  placeholder={t('username')}
                  value={values.name}
                  isInvalid={(touched.name && !!errors.name) || error}
                  onChange={handleChange}
                  autoComplete="username"
                />
                <Form.Control.Feedback tooltip type="invalid">{errors.name || error}</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              controlId="password"
              className="position-relative mb-3"
            >
              <FloatingLabel
                label={t('password')}
              >
                <Form.Control
                  type="password"
                  name="password"
                  placeholder={t('password')}
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
              controlId="confirmPassword"
              className="position-relative mb-3"
            >
              <FloatingLabel
                label={t('confirmPassword')}
              >
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder={t('confirmPassword')}
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
              {t('toSignUp')}
            </Button>
          </Form>
        )
      }
    </Formik>
  );
}
