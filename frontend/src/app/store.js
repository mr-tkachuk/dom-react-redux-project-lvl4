import { configureStore } from '@reduxjs/toolkit';
import { loginFormReducer } from '../features/LoginFrom/loginFormSlice';
import { api } from '../shared/api/api';
import { userReducer } from '../entities/User/userSlice';
import { channelsReducer } from '../features/Channels/channelsSlice';
import { messagesReducer } from '../features/Messages/messagesSlice';
import socketMiddleware from './socketMiddleware';
import { socketReducer } from '../shared/api/socketSlice';
import { registrationFormReducer } from '../features/RegistrationForm/registrationFormSlice';

const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    registrationForm: registrationFormReducer,
    user: userReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    socket: socketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
      },
    },
  }).concat([socketMiddleware])
  ,
});

export default store;
