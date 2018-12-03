export default class NewsService {
  constructor(apiKey) {
    this.url = {
      address: 'https://newsapi.org/v2/top-headlines',
      country: 'us',
      apiKey
    };
  }

  urlBuilder(theme) {
    const url = `${this.url.address}?country=${this.url.country}&category=${theme}&apiKey=${this.url.apiKey}`;
    return url;
  }

  fetchNews(theme) {
    const url = this.urlBuilder(theme);
    const request = new Request(url);
    return fetch(request).then((response) => {
      return response.json();
    });
  }
}