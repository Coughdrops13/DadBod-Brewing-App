import { createSlice } from '@reduxjs/toolkit';

const initialBeerState = {
  inventory: [],
  comments: [],
};

const beerSlice = createSlice({
  name: 'beers',
  initialState: initialBeerState,
  reducers: {
    setBeersList(state, action) {
      state.inventory = action.payload;
    },
    setBeersComments(state, action) {
      state.comments = action.payload;
    }
    
  },
})

export const beerActions = beerSlice.actions;

export default beerSlice.reducer;