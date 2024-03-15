import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    initSocket: () => {},
  },
});

export const { actions: socketActions } = socketSlice;
export const { reducer: socketReducer } = socketSlice;
