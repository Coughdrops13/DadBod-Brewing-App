export async function fetchBeersData ()  {
  const response = await fetch("/DadBod/beers");
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || "Fetching beer data failed...");
  }

  return data;
};

export async function fetchSingleBeer (beerId) {
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
};