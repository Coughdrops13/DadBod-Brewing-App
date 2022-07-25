import { createSlice } from '@reduxjs/toolkit'; 

const initialLoggedInState = {
  isLoggedIn: undefined,
};

const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState: initialLoggedInState,
  reducers: {
    logIn(state) {
      console.log('LOGGEDINACTIONS LOGIN TRIGGERED')
      state.isLoggedIn = true;
    },
    logOut(state) {
      console.log('LOGGEDINACTIONS LOGOUT TRIGGERED')
      state.isLoggedIn = false;
    }
  }
})

export const loggedInActions = loggedInSlice.actions;

export default loggedInSlice.reducer;