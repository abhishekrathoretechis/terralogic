import axios from 'axios';
import {fetchUsers} from './api';

jest.mock('axios');

describe('api', () => {
  it('fetches users successfully', async () => {
    const mockResponse = {data: {items: [{login: 'user1'}, {login: 'user2'}]}};
    axios.get.mockResolvedValueOnce(mockResponse);

    const result = await fetchUsers('testuser', 1);

    expect(result).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.github.com/search/users',
      {
        params: {
          q: 'testuser in:login',
          page: 1,
          per_page: 10,
        },
      },
    );
  });

  it('throws an error on failure', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchUsers('testuser', 1)).rejects.toThrow('Network Error');
  });
});
