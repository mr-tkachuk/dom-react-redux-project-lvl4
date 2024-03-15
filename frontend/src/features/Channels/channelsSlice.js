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
      state.active = action.payload;
    },
    addChannel: (state, action) => {
      if (state.channels.map(({ id }) => id).includes(action.payload.id)) return;
      state.channels.push(action.payload);
    },
    removeChannel: (state, action) => {
      state.channels = state.channels.filter(({ id }) => id !== action.payload);
      if (state.active.id === action.payload) {
        [state.active] = state.channels;
      }
    },
    updateChannel: (state, action) => {
      if (state.active.id === action.payload.id) {
        state.active = action.payload;
      }
      const index = state.channels.findIndex(({ id }) => id === action.payload.id);
      state.channels[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChannels.pending, (state) => {
        state.error = undefined;
      })
      .addCase(getChannels.fulfilled, (state, action) => {
        state.channels = action.payload;
        [state.active] = action.payload;
      })
      .addCase(getChannels.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(postChannel.pending, (state) => {
        state.error = undefined;
      })
      .addCase(postChannel.fulfilled, (state, action) => {
        state.active = action.payload;
      })
      .addCase(postChannel.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { actions: channelsActions } = channelsSlice;
export const { reducer: channelsReducer } = channelsSlice;
