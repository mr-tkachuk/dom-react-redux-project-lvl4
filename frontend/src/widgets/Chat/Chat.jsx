import {
  Col, Container, Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Channels from '../../features/Channels/Channels';
import Messages from '../../features/Messages/Messages';
import { activeSelector } from '../../features/Channels/selectors';
import { socketActions } from '../../shared/api/socketSlice';

const Chat = () => {
  const activeChannel = useSelector(activeSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(socketActions.initSocket());
  }, [dispatch]);

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col xs={4} md={2} className="border-end px-0 bg-light flex-column h-100 d-flex">
          <Channels />
        </Col>
        <Col className="p-0 h-100">
          <Messages channel={activeChannel} />
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
