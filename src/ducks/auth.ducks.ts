import { $login } from '@/api/interceptors';
import { RootState } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  refresh: string;
  access: string;
  expiredAt: number | null | BigInt;
};

const initialState: State = {
  refresh: '',
  access: '',
  expiredAt: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<State>) => {
      state.access = payload.access;
      state.refresh = payload.refresh
      state.expiredAt = payload.expiredAt
    },

    refresh: (state, { payload }) => {},

    logout: (state) => {
      state = initialState;
    },
  },
});

const { reducer, actions } = authSlice;

export default reducer;

export const { login, refresh, logout } = actions;

export const selectAuth = (rootState: RootState) => rootState.auth;
