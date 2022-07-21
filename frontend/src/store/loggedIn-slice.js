import { createSlice } from '@reduxjs/toolkit'; 

const initialLoggedInState = {
  isLoggedIn: undefined,
};

const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState: initialLoggedInState,
  reducers: {
    logIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    }
  }
})

export const loggedInActions = loggedInSlice.actions;

export default loggedInSlice.reducer;