import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  userName: '',
  admin: false,
  favoriteBeers: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
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