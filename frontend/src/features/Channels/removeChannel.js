import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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
      toast(i18n.t('channelRemoved'), {
        type: 'success',
      });
      return channel.id;
    } catch (e) {
      toast(i18n.t('errorHappened'), {
        type: 'error',
      });
      return rejectWithValue(i18n.t('errorHappened'));
    }
  },
);

export default removeChannel;
