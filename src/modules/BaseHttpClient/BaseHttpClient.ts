import HttpClient from '../HttpClient';

const BaseHttpClient = new HttpClient({
  baseURL: 'https://oauth.reddit.com/api/v1',
});

export default BaseHttpClient;
