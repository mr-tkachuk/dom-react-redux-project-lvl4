import { createAsyncThunk } from '@reduxjs/toolkit';

const postChannel = createAsyncThunk(
  'channels/postChannel',
  async (channel, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post('/channels', channel);
      if (!response.data) {
        throw new Error('Случилась ошибка');
      }
      return response.data;
    } catch (e) {
      return rejectWithValue('Случилась ошибка');
    }
  },
);

export default postChannel;
