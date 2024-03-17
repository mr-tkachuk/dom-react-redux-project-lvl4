import { createSlice } from '@reduxjs/toolkit';
import loginByUsername from './loginByUsername';

const initialState = {
  error: '',
  isLoading: false,
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    resetError: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.error = undefined;
        // eslint-disable-next-line no-param-reassign
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        // eslint-disable-next-line no-param-reassign
        state.error = action.payload;
      });
  },
});

export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducer } = loginFormSlice;
