import axios from 'axios';

export const fetchUsers = async (login, page = 1) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users`, {
      params: {q: `${login} in:login`, per_page: 10, page},
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
