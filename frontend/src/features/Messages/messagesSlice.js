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
      // eslint-disable-next-line no-param-reassign
      state.messages.push(action.payload);
    },
    removeMessagesByChannel: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.messages = state.messages.filter(({ channelId }) => channelId !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.error = undefined;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.error = action.payload;
      });
  },
});

export const { actions: messagesActions } = messagesSlice;
export const { reducer: messagesReducer } = messagesSlice;
