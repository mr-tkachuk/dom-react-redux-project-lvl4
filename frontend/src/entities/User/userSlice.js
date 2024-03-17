import { createSlice } from '@reduxjs/toolkit';
import { AUTHORIZATION_DATA } from '../../shared/const/const';

const initialState = {
  isMounted: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.authData = action.payload;
    },
    logout: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.authData = null;
      localStorage.removeItem(AUTHORIZATION_DATA);
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(AUTHORIZATION_DATA);
      if (user) {
        // eslint-disable-next-line no-param-reassign
        state.authData = JSON.parse(user);
      }
      // eslint-disable-next-line no-param-reassign
      state.isMounted = true;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
