import axios from "axios";

const instance = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
  params: {
    api_key: 'ac51814cdc932ac6c6a593989c2540dd',
    format: 'json'
  }
});

export default instance;