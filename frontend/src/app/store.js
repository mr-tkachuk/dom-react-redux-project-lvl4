import { configureStore } from '@reduxjs/toolkit';
import { loginFormReducer } from '../features/LoginFrom/loginFormSlice';
import api from '../shared/api/api';
import { userReducer } from '../entities/User/userSlice';

const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api,
      },
    },
  }),
});

export default store;
