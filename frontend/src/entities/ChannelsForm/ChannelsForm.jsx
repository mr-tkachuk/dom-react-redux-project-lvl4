import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function ChannelsForm({
  onClose, channels, onSubmit, editedId,
}) {
  const channelsNames = channels.map(({ name }) => name);
  const name = channels.find(({ id }) => id === editedId)?.name || '';
  const schema = yup.object().shape({
    channelName: yup.string()
      .required('Обязательное поле')
      .notOneOf(channelsNames, 'Должно быть уникальным')
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов'),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={({ channelName }) => {
        onSubmit({ name: channelName });
      }}
      initialValues={{
        channelName: name,
      }}
    >
      {
          ({
            handleSubmit, handleChange, values, errors,
          }) => (
            <Form
              onSubmit={(data) => {
                handleSubmit(data);
                onClose();
              }}
            >
              <Form.Group controlId="channelsName">
                <Form.Control
                  type="text"
                  name="channelName"
                  value={values.channelName}
                  onChange={handleChange}
                  isInvalid={!!errors.channelName}
                  required
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  {errors.channelName}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="d-flex align-items-center justify-content-end mt-2 gap-3">
                <Button
                  variant="secondary"
                  onClick={onClose}
                >
                  Отменить
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!!errors.channelName}
                >
                  Отправить
                </Button>
              </div>
            </Form>
          )
        }
    </Formik>
  );
}
