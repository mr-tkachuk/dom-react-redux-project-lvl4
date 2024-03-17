import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userActions } from '../../entities/User/userSlice';
import { AUTHORIZATION_DATA } from '../../shared/const/const';
import i18n from '../../shared/i18n/i18n';

const signUp = createAsyncThunk(
  'registration/signUp',
  async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post('/signup', authData);
      localStorage.setItem(AUTHORIZATION_DATA, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      if (!response.data) {
        throw new Error(i18n.t('errorHappened'));
      }
      return response.data;
    } catch (e) {
      if (e.response.status === 409) {
        return rejectWithValue(i18n.t('alreadyExistUser'));
      }
      toast(i18n.t('errorHappened'), {
        type: 'error',
      });
      return rejectWithValue(i18n.t('errorHappened'));
    }
  },
);
export default signUp;
