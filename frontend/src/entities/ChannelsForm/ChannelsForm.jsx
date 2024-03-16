import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export default function ChannelsForm({
  onClose, channels, onSubmit, editedId,
}) {
  const channelsNames = channels.map(({ name }) => name);
  const name = channels.find(({ id }) => id === editedId)?.name || '';
  const { t } = useTranslation();
  const schema = yup.object().shape({
    channelName: yup.string()
      .required(t('required'))
      .notOneOf(channelsNames, t('hasToBeUnique'))
      .min(3, t('symbolsCount'))
      .max(20, t('symbolsCount')),
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
                  {t('cancel')}
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!!errors.channelName}
                >
                  {t('send')}
                </Button>
              </div>
            </Form>
          )
        }
    </Formik>
  );
}
