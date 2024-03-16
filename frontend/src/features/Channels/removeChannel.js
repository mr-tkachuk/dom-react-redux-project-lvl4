import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from '../../shared/i18n/i18n';

const removeChannel = createAsyncThunk(
  'channels/removeChannel',
  async (channel, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.delete(`/channels/${channel}`);
      if (!response.data) {
        throw new Error(i18n.t('errorHappened'));
      }
      return channel.id;
    } catch (e) {
      return rejectWithValue(i18n.t('errorHappened'));
    }
  },
);

export default removeChannel;
