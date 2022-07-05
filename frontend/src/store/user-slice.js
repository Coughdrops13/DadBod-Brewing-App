import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  userName: '',
  isLoggedIn: false,
  admin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login(state, action) {
      state.userName = action.payload.userName;
      state.isLoggedIn = true;

      if (action.payload.userName === 'Coughdrops13') {
        state.admin === true;
      }
    },
    logout(state) {
      state = initialUserState;
    },
  }
});