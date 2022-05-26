const axios = require('axios');
const { listenerCount } = require('process');
const { isArray } = require('util');

describe('Check if we can post and save favorites list in database ', () => {
  test('checking....', async () => {
    const response = await axios.post('http://localhost:3000/favorites', {
      listName: 'Test11',
      ids: [2, 3, 1],
    });

    expect(response.data.status === true).toBeTruthy();
  });
});
