class ArticleComponent {
  constructor(datum) {
    this.component = document.createElement('article');
    this.createArticle(datum);
  }

  createTextElement(type, className, text) {
    const element = document.createElement(type);
    element.className = className;
    element.textContent = text;
    return element;
  }

  createBlurredDiv(title, description) {
    const blur = document.createElement('div');
    blur.className = 'blur';
    const newsTitle = this.createTextElement('h1', 'title', title);
    const newsDescription = this.createTextElement('p', 'description', description);
    blur.appendChild(newsTitle);
    blur.appendChild(newsDescription)
    return blur;
  }

  createArticleDiv(image) {
    const article = document.createElement('div');
    article.className = 'article';
    article.style.backgroundImage = `url(${image})`;
    return article;
  }

  createLink(href) {
    const link = document.createElement('a');
    link.href = href;
    return link;
  }

  createArticle(datum) {
    const { href, image, title, description } = datum;
    const blur = this.createBlurredDiv(title, description);
    const article = this.createArticleDiv(image);
    article.appendChild(blur);
    const link = this.createLink(href);
    link.appendChild(article);
    this.component.className = 'article-container';
    this.component.appendChild(link);
  }

  render() {
    return this.component;
  }
}