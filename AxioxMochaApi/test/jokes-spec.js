const axios = require('axios');
const { expect } = require('chai');
const url = 'https://api.chucknorris.io/jokes/random'

describe('Random()',  () => {
    it('should get a new joke upon each request', async () => {
      const firstJoke = await axios.get(url);
      const secondJoke = await axios.get(url);

      expect(firstJoke.data.value).not.to.equal(secondJoke.data.value);
    });
  });