import {
  Button, ButtonGroup, DropdownButton, Dropdown, Modal,
} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ChannelsForm from '../ChannelsForm/ChannelsForm';
import updateChannel from '../../features/Channels/updateChannel';

export default function ChannelsList({
  channels, active, setActive, remove,
}) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [shownChannelId, setShownChannelId] = useState(null);
  const dispatch = useDispatch();
  return (
    <>
      <ButtonGroup vertical>
        { channels
          && channels.map((channel) => (channel.removable ? (
            <ButtonGroup key={channel.id}>
              <Button
                variant={channel.id === active.id ? 'secondary' : ''}
                onClick={() => setActive(channel)}
                className="w-100 rounded-0 text-start text-truncate"
              >
                #
                {' '}
                {channel.name}
              </Button>
              <DropdownButton
                as={ButtonGroup}
                title=""
                id="bg-nested-dropdown"
                variant={channel.id === active.id ? 'secondary' : ''}
                className="d-flex"
              >
                <Dropdown.Item
                  eventKey="1"
                  onClick={() => {
                    setShownChannelId(channel.id);
                    setShowDelete(true);
                  }}
                >
                  Удалить
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  onClick={() => {
                    setShownChannelId(channel.id);
                    setShowEdit(true);
                  }}
                >
                  Переименовать
                </Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          ) : (
            <Button
              key={channel.id}
              variant={channel.id === active.id ? 'secondary' : ''}
              onClick={() => setActive(channel)}
              className="w-100 rounded-0 text-start text-truncate"
            >
              #
              {' '}
              {channel.name}
            </Button>
          )))}
      </ButtonGroup>
      <Modal
        show={showEdit}
        centered
        onHide={() => setShowEdit(false)}
      >
        <Modal.Header className="h4" closeButton>
          Переименовать канал
        </Modal.Header>
        <Modal.Body>
          <ChannelsForm
            channels={channels}
            editedId={shownChannelId}
            onSubmit={(data) => {
              dispatch(updateChannel({ data, id: shownChannelId }));
            }}
            onClose={() => setShowEdit(false)}
          />
        </Modal.Body>
      </Modal>
      <Modal
        show={showDelete}
        centered
        onHide={() => setShowDelete(false)}
      >
        <Modal.Header className="h4" closeButton>
          Удалить канал
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Уверены?</p>
          <div className="d-flex justify-content-end gap-2">
            <Button
              variant="secondary"
              onClick={() => setShowDelete(false)}
            >
              Отменить
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                remove(shownChannelId);
                setShowDelete(false);
              }}
            >
              Удалить
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
