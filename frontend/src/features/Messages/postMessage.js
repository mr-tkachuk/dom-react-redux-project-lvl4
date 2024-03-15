import { createAsyncThunk } from '@reduxjs/toolkit';

const postMessage = createAsyncThunk(
  'messages/postMessage',
  async (message, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post('/messages', message);
      if (!response.data) {
        throw new Error('Случилась ошибка');
      }
      return response.data;
    } catch (e) {
      if (e.response.status === 401) {
        return rejectWithValue('Неверные имя пользователя или пароль');
      }
      return rejectWithValue('Случилась ошибка');
    }
  },
);
export default postMessage;
