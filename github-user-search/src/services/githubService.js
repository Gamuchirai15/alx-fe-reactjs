import axios from 'axios';

const API_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (query, page = 1, location = '', minRepos = '') => {
  const perPage = 10; 
  
  let searchQuery = `type:user`;
  
  if (query) searchQuery += `+${query}`; 
  if (location) searchQuery += `+location:${location}`; 
  if (minRepos) searchQuery += `+repos:>=${minRepos}`; 

  try {
    const response = await axios.get(API_URL, {
      params: {
        q: searchQuery,
        page: page,
        per_page: perPage, 
      },
    });
    return response.data;  
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};



