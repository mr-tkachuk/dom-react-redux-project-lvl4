import { createSlice } from '@reduxjs/toolkit';
import getChannels from './getChannels';

const initialState = {
  channels: [],
  isLoading: false,
  active: null,
};

export const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChannels.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getChannels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.channels = action.payload;
        // eslint-disable-next-line prefer-destructuring
        state.active = action.payload[0];
      })
      .addCase(getChannels.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: channelsActions } = channelsSlice;
export const { reducer: channelsReducer } = channelsSlice;
