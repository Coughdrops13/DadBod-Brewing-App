import { beerActions } from "./beer-slice";

export const fetchBeerData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("/DadBod/beers");
      
      if (!response.ok) {
        throw new Error("Fetching beer data failed...");
      }

      const data = await response.json();

      return data;
    };

    try {
      const beerData = await fetchData();
      dispatch(beerActions.getBeersList(beerData))
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};
