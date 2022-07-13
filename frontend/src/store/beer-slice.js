import { createSlice } from '@reduxjs/toolkit';

const initialBeerState = {
  inventory: [],
};

const beerSlice = createSlice({
  name: 'beers',
  initialState: initialBeerState,
  reducers: {
    getBeersList(state, action) {
      console.log('ACTION.PAYLOAD', action.payload)
      state.inventory = action.payload;
      console.log("STATE>INVENTORY", state.inventory)
    },
    // addBeer(state, action) {
    //   const newBeer = action.payload;
    //   const existingBeer = state.beers.inventory.find(beer => beer.name === newBeer.name);

    //   if (!existingBeer) {
    //     state.beers.inventory.push(newBeer);
    //   }
    // },
    // removeBeer(state, action) {
    //   const beerName = action.payload;

    //   state.beers.inventory.filter(beer => beer.name !== beerName)

    // },
  },
})

export const beerActions = beerSlice.actions;

export default beerSlice.reducer;