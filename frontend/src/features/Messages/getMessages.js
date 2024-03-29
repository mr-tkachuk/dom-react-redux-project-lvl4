import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18n from '../../shared/i18n/i18n';

const getMessages = createAsyncThunk(
  'messages/getMessages',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get('/messages');
      if (!response.data) {
        throw new Error(i18n.t('errorHappened'));
      }
      return response.data;
    } catch (e) {
      toast(i18n.t('errorHappened'), {
        type: 'error',
      });
      return rejectWithValue(i18n.t('errorHappened'));
    }
  },
);
export default getMessages;
