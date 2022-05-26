const axios = require('axios');
const { listenerCount } = require('process');
const { isArray } = require('util');

describe('Check we can get films from our API ', () => {
  test('check if we get Array of films', async () => {
    const response = await axios.get('http://localhost:3000/films');

    expect(
      response.data.payload.length > 0 &&
        Array.isArray(response.data.payload) &&
        response.data.status === true
    ).toBeTruthy();
  });
});
