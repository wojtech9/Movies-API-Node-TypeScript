const axios = require('axios');
const { listenerCount } = require('process');
const { isArray } = require('util');

describe('Check we get all favorites lists from our API ', () => {
  test('check if we get Array of favorites list', async () => {
    const response = await axios.get('http://localhost:3000/favorites');

    expect(
      response.data.payload.length > 0 &&
        Array.isArray(response.data.payload) &&
        response.data.status === true
    ).toBeTruthy();
  });
});
