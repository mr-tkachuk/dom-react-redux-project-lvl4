import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18n from '../../shared/i18n/i18n';

const updateChannel = createAsyncThunk(
  'channels/updateChannel',
  async ({ data, id }, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.patch(`/channels/${id}`, data);
      if (!response.data) {
        throw new Error(i18n.t('errorHappened'));
      }
      toast(i18n.t('channelRenamed'), {
        type: 'success',
      });
      return response.data;
    } catch (e) {
      toast(i18n.t('errorHappened'), {
        type: 'error',
      });
      return rejectWithValue(i18n.t('errorHappened'));
    }
  },
);

export default updateChannel;
