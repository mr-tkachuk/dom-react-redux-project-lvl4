import {
  Button, Modal,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import getChannels from './getChannels';
import { activeSelector, channelsSelector } from './selectors';
import ChannelsList from '../../entities/ChannelList/ChannelsList';
import { channelsActions } from './channelsSlice';
import postChannel from './postChannel';
import removeChannel from './removeChannel';
import ChannelsForm from '../../entities/ChannelsForm/ChannelsForm';

export default function Channels() {
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelector);
  const active = useSelector(activeSelector);
  const [show, setShow] = useState(false);
  useEffect(() => {
    dispatch(getChannels());
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex mt-1 justify-content-between align-items-center mb-2 ps-4 pe-2 p-4">
        <b>{t('channels')}</b>
        <Button
          variant="outline-primary"
          className="p-1"
          onClick={() => setShow(true)}
        >
          +
        </Button>
      </div>
      <ChannelsList
        setActive={(id) => dispatch(channelsActions.setActive(id))}
        channels={channels}
        active={active}
        remove={(id) => dispatch(removeChannel(id))}
      />
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
      >
        <Modal.Header className="h4" closeButton>
          {t('addChannel')}
        </Modal.Header>
        <Modal.Body>
          <ChannelsForm
            channels={channels}
            onSubmit={(data) => dispatch(postChannel(data))}
            onClose={() => setShow(false)}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
