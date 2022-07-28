import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  userName: '',
  email: '',
  admin: false,
  favoriteBeers: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setLoggedInUser(state, action) {
      const user = action.payload
      console.log("USER FROM SETLOGGEDINUSER: ", user);
      state.userName = user.userName;
      state.email = user.email;
      state.admin = user.userName === 'Coughdrops' ? true : false;
      state.favoriteBeers = user.favoriteBeers;
      
    },
    logOutUser(state) {
      state.userName = '';
      state.email = '';
      state.admin = false;
      state.favoriteBeers = [];
    },
    addFavoriteBeer(state, action) {
      const newBeer = action.payload;
      const existingBeer = state.favoriteBeers.find(beer => beer.id === newBeer.id);

      if (existingBeer) {
        return;
      } else {
        state.favoriteBeers.push(newBeer);
      }
    },
    removeFavoriteBeer(state, action){
      const id = action.payload;
      const existingBeer = state.favoriteBeers.find(beer => beer.id === id);

      if (!existingBeer) {
        return;
      } else {
        state.favoriteBeers.filter(beer => beer.id !== id);
      }


    },
  }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;