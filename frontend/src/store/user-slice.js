import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  userName: '',
  isLoggedIn: false,
  admin: false,
  favoriteBeers: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login(state, action) {
      state.userName = action.payload.userName;
      state.isLoggedIn = true;
    },
    logout(state) {
      state = initialUserState;
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