import { socketActions } from '../shared/api/socketSlice';
import { socket } from '../shared/api/api';
import { messagesActions } from '../features/Messages/messagesSlice';

const socketMiddleware = (store) => (next) => (action) => {
  if (socketActions.initSocket.match(action)) {
    socket.on('newMessage', (payload) => {
      store.dispatch(messagesActions.addMessage(payload));
    });
  }

  next(action);
};

export default socketMiddleware;
