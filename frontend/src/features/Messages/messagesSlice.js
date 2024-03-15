import { createSlice } from '@reduxjs/toolkit';
import getMessages from './getMessages';

const initialState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.map(({ id }) => id).includes(action.payload.id)) return;
      state.messages.push(action.payload);
    },
    removeMessagesByChannel: (state, action) => {
      state.messages = state.messages.filter(({ channelId }) => channelId !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state) => {
        state.error = undefined;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { actions: messagesActions } = messagesSlice;
export const { reducer: messagesReducer } = messagesSlice;
