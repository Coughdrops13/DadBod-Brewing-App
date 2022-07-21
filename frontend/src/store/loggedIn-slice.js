import { createSlice } from '@reactjs/toolkit'; 

const initialLoggedInState = {
  loggedIn: false,
};

const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState: initialLoggedInState,
  reducers: {
    switchLoggedIn(state) {
      // store current loggedIn state
      const currentState = state.loggedIn;
      // switch loggedIn state to opposite
      state.loggedIn = !currentState;

      console.log(`User has been logged` + currentState ? 'out' : 'in');
    }
  }
})

export const loggedInActions = loggedInSlice.actions;

export default loggedInSlice.reducer;