import axios from 'axios';

// ---------------------------------Beer Functions--------------------------------------------
export async function fetchBeersData() {
  try {
    const response = await axios.get("/DadBod/beers");
  
    return response.data;

  } catch (error) {
    console.log("Fetching beer data failed... ", error);
  }
};

export async function fetchSingleBeer(beerId) {
  try {
    const response = await axios.get(`/DadBod/beers/${beerId}`)

    const loadedBeer = {
      ...response.data
    }
  
    return loadedBeer;

  } catch (error) {
    console.log("Fetching beer data failed... ", error);  
  }
};

// -----------------------------------Login Functions-----------------------------------------

export async function getLoggedIn() {
  const isLoggedIn = await axios.get('http://localhost:3000/DadBod/users/loggedIn');
  console.log("GET LOGGED IN", isLoggedIn)
  return isLoggedIn.data;
};

// -----------------------------------Comments Functions--------------------------------------

export async function getComments(beer_id) {
  try {
    const comments = await axios.get(`http://localhost:3000/DadBod/comments/${beer_id}`);
    console.log("COMMENTS: ", comments.data);
    return comments.data;
  } catch (error) {
    console.log("ERROR FROM: getComments", error)
  }
}