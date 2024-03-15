import { createAsyncThunk } from '@reduxjs/toolkit';

const removeChannel = createAsyncThunk(
  'channels/removeChannel',
  async (channel, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.delete(`/channels/${channel}`);
      if (!response.data) {
        throw new Error('Случилась ошибка');
      }
      return channel.id;
    } catch (e) {
      return rejectWithValue('Случилась ошибка');
    }
  },
);

export default removeChannel;
