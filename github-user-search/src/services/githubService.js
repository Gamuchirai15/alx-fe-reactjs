import axios from 'axios';

const API_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (query, page = 1) => {
  const perPage = 10;
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        page: page,
        per_page: perPage,
      },
    });
    return response.data; 
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};


