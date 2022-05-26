const axios = require('axios');
const { listenerCount } = require('process');
const { isObject } = require('util');

describe('Check we can get excel file', () => {
  test('checking...', async () => {
    const returnData = await axios.get('http://localhost:3000/favorites/');
    const response = await axios.get(
      `http://localhost:3000/favorites/${returnData.data.payload[0].id}/file`
    );

    expect(response.status === 200).toBeTruthy();
  });
});
