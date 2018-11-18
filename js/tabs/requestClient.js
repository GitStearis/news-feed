class RequestClient {
  constructor(apiKey) {
    this.url = {
      address: 'https://newsapi.org/v2/top-headlines',
      country: 'ru',
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
    const requestStart = new CustomEvent('requestStart');
    document.dispatchEvent(requestStart);
    fetch(request).then((response) => {
      const requestComplete = new CustomEvent('requestComplete', { 
        detail: response.json()
      });
      document.dispatchEvent(requestComplete);
    });
  }
}