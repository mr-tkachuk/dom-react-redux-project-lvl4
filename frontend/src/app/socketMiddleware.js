import { socketActions } from '../shared/api/socketSlice';
import { socket } from '../shared/api/api';
import { messagesActions } from '../features/Messages/messagesSlice';
import { channelsActions } from '../features/Channels/channelsSlice';

const socketMiddleware = (store) => (next) => (action) => {
  if (socketActions.initSocket.match(action)) {
    socket.on('newMessage', (payload) => {
      store.dispatch(messagesActions.addMessage(payload));
    });
    socket.on('newChannel', (payload) => {
      store.dispatch(channelsActions.addChannel(payload));
    });
    socket.on('removeChannel', (payload) => {
      store.dispatch(channelsActions.removeChannel(payload.id));
      store.dispatch(messagesActions.removeMessagesByChannel(payload.id));
    });
    socket.on('renameChannel', (payload) => {
      store.dispatch(channelsActions.updateChannel(payload));
    });
  }

  next(action);
};

export default socketMiddleware;
