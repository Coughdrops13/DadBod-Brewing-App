import { beerActions } from "./beer-slice";

export const fetchBeersData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("/DadBod/beers");
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Fetching beer data failed...");
      }


      return data;
    };

    try {
      const beerData = await fetchData();
      dispatch(beerActions.setBeersList(beerData))
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};

export const fetchSingleBeer = (beerId) => {
  return async (disptach) => {
    const fetchData = async () => {
      const response = await fetch(`/DadBod/beers/${beerId}`)
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Fetching beer data failed...");
      }
      

      const loadedBeer = {
        id: beerId,
        ...data
      }

      return loadedBeer;
    }

    try {
      const beerData = fetchData();
      return beerData;

    } catch (error) {
      console.log("ERROR", error);
    }
  }
};