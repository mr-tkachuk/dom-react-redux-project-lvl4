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
      state.authData = action.payload;
    },
    logout: (state) => {
      state.authData = null;
      localStorage.removeItem(AUTHORIZATION_DATA);
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(AUTHORIZATION_DATA);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state.isMounted = true;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
