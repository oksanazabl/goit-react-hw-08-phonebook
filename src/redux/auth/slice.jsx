import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setRefreshing: (state, action) => {
      state.isRefreshing = action.payload;
    },
  },
});

export const { setUser, setToken, setLoggedIn, setRefreshing } =
  authSlice.actions;

export const registerUser = userData => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await register(userData);
    const { token, user } = response.data;
    dispatch(setUser(user));
    dispatch(setToken(token));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const loginUser = userData => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await logIn(userData);
    const { token, user } = response.data;
    dispatch(setUser(user));
    dispatch(setToken(token));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logoutUser = () => async dispatch => {
  dispatch(setLoading(true));
  try {
    await logOut();
    dispatch(setUser(null));
    dispatch(setToken(null));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const refreshUserToken = () => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await refreshUser();
    const { token, user } = response.data;
    dispatch(setUser(user));
    dispatch(setToken(token));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default authSlice.reducer;
