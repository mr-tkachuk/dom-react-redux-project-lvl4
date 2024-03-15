import { createAsyncThunk } from '@reduxjs/toolkit';

const updateChannel = createAsyncThunk(
  'channels/updateChannel',
  async ({ data, id }, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.patch(`/channels/${id}`, data);
      if (!response.data) {
        throw new Error('Случилась ошибка');
      }
      return response.data;
    } catch (e) {
      return rejectWithValue('Случилась ошибка');
    }
  },
);

export default updateChannel;
