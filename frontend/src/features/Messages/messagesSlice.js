import { createSlice } from '@reduxjs/toolkit';
import getMessages from './getMessages';
import postMessage from './postMessage';

const initialState = {
  messages: [],
  isLoading: false,
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.map(({ id }) => id).includes(action.payload.id)) return;
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postMessage.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(postMessage.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: messagesActions } = messagesSlice;
export const { reducer: messagesReducer } = messagesSlice;
