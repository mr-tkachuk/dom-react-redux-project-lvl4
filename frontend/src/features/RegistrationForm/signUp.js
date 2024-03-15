import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '../../entities/User/userSlice';
import { AUTHORIZATION_DATA } from '../../shared/const/const';

const signUp = createAsyncThunk(
  'registration/signUp',
  async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post('/signup', authData);
      localStorage.setItem(AUTHORIZATION_DATA, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      if (!response.data) {
        throw new Error('Случилась ошибка');
      }
      return response.data;
    } catch (e) {
      if (e.response.status === 409) {
        return rejectWithValue('Такой пользователь уже существует');
      }
      return rejectWithValue('Случилась ошибка');
    }
  },
);
export default signUp;
