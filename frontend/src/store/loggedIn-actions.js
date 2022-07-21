import axios from 'axios';

export async function getLoggedIn() {
  const isLoggedIn = await axios.get('http://localhost:3000/DadBod/users/loggedIn',);
  return isLoggedIn;
};