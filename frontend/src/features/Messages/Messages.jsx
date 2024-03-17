import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Formik } from 'formik';
import {
  Button, Form, InputGroup,
} from 'react-bootstrap';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import getMessages from './getMessages';
import messagesSelector from './selectors';
import getNoun from '../../shared/utils/getNoun';
import postMessage from './postMessage';
import { authDataSelector } from '../../entities/User/selectors';
import MessagesList from '../../entities/MessagesList/MessagesList';
import filter from '../../shared/leoProfanity/leoProfanity';

const Messages = ({ channel }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  const messages = useSelector(messagesSelector);
  const { name, id: channelId } = channel || { name: '', id: '' };
  const { username } = useSelector(authDataSelector);
  const filteredMessages = messages.filter((message) => message.channelId === channelId);
  const count = filteredMessages.length;
  const schema = yup.object().shape({
    message: yup.string().required(),
  });
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column h-100">
      <div className="bg-light mb-4 p-3 shadow-sm small">
        <p className="m-0">
          <b>{`# ${name}`}</b>
        </p>
        <span className="text-muted">
          {`${count} ${getNoun(count, 'сообщение', 'сообщения', 'сообщений')}`}
        </span>
      </div>
      <MessagesList messages={filteredMessages} />
      <div className="mt-auto px-5 py-3">
        <Formik
          validationSchema={schema}
          initialValues={{ message: '' }}
          onSubmit={({ message: body }, { resetForm }) => {
            dispatch(postMessage({ body: filter.clean(body), channelId, username }));
            resetForm();
          }}
        >
          {({
            handleSubmit, handleChange, values, errors,
          }) => (
            <Form className="py-1 border rounded-2" noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="message">
                <InputGroup hasValidation className="px-1">
                  <Form.Control
                    type="text"
                    name="message"
                    className="border-0 p-0 ps-2"
                    placeholder={t('typeMessage')}
                    aria-label="Новое сообщение"
                    value={values.message}
                    onChange={handleChange}
                    autoFocus
                    required
                  />
                  <Button
                    type="submit"
                    variant="outline-secondary"
                    disabled={!values.message && errors.message}
                  >
                    {t('send')}
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Messages;
