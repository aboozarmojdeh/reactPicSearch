import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID b929518287e9096e085311b978025ad7a20fd84bf00dbd3551b6661cfab372ea"
      }
});
