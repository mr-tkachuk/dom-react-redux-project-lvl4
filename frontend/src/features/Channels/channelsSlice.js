import { createSlice } from '@reduxjs/toolkit';
import getChannels from './getChannels';
import postChannel from './postChannel';

const initialState = {
  channels: [],
  active: null,
};

export const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setActive: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.active = action.payload;
    },
    addChannel: (state, action) => {
      if (state.channels.map(({ id }) => id).includes(action.payload.id)) return;
      // eslint-disable-next-line no-param-reassign
      state.channels.push(action.payload);
    },
    removeChannel: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.channels = state.channels.filter(({ id }) => id !== action.payload);
      if (state.active.id === action.payload) {
        // eslint-disable-next-line no-param-reassign
        [state.active] = state.channels;
      }
    },
    updateChannel: (state, action) => {
      if (state.active.id === action.payload.id) {
        // eslint-disable-next-line no-param-reassign
        state.active = action.payload;
      }
      const index = state.channels.findIndex(({ id }) => id === action.payload.id);
      // eslint-disable-next-line no-param-reassign
      state.channels[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChannels.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.error = undefined;
      })
      .addCase(getChannels.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.channels = action.payload;
        // eslint-disable-next-line no-param-reassign
        [state.active] = action.payload;
      })
      .addCase(getChannels.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.error = action.payload;
      })
      .addCase(postChannel.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.error = undefined;
      })
      .addCase(postChannel.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.active = action.payload;
      })
      .addCase(postChannel.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.error = action.payload;
      });
  },
});

export const { actions: channelsActions } = channelsSlice;
export const { reducer: channelsReducer } = channelsSlice;
