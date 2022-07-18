export async function fetchBeersData ()  {
  // return async (dispatch) => {
    // const fetchData = async () => {
      const response = await fetch("/DadBod/beers");
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Fetching beer data failed...");
      }

      console.log("DATA", data);

      return data;
    // };
    // try {
    //   fetchData() 
    // } catch (error) {
    //   console.log('Error fetching ALL beers.', error);
    // }
  // }
    
};

export async function fetchSingleBeer (beerId) {
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
      fetchData();
    } catch (error) {
      console.log("Error fetching ONE beer.", error);
    }
  }
};