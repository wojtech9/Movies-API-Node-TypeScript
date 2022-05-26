const axios = require('axios');
const { listenerCount } = require('process');
const { isObject } = require('util');

describe('Check we can get favorites list by id from database', () => {
  test('checking...', async () => {
    const returnData = await axios.get('http://localhost:3000/favorites/');
    const response = await axios.get(
      `http://localhost:3000/favorites/${returnData.data.payload[0].id}`
    );

    expect(
      isObject(response.data.payload) && response.data.status === true
    ).toBeTruthy();
  });
});
