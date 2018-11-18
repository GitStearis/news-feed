class TabBuilder {
  constructor(config) {
    this.config = config;
    this.buttons = document.getElementById('buttons');
    this.content = document.getElementById('content');
    this.loader = this.createLoader();

    this.inititalizeButtons();
  }

  selectFirstTab() {
    this.buttons.firstElementChild.click();
  }

  handleClick(button, onClick) {
    button.addEventListener('click', onClick);
  }

  createButton(id, title) {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = title;
    button.addEventListener('click', this.makeButtonActive.bind(this));
    button.addEventListener('click', this.clearContent.bind(this));
    return button;
  }

  inititalizeButtons() {
    for (let [key, value] of Object.entries(this.config)) {
      this.buttons.appendChild(this.createButton(value.id, value.title));
    }
  }

  makeButtonActive(event) {
    this.buttons.childNodes.forEach(button => {
      button.className = '';
    });
    event.srcElement.className = 'active';
  }

  clearContent() {
    while(this.content.firstChild) {
      this.content.removeChild(this.content.firstChild);
    }
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
    const articleContainer = document.createElement('article');
    articleContainer.className = 'article-container';
    articleContainer.appendChild(link);
    return articleContainer;
  }

  fillContent(data) {
    data.forEach(datum => {
      const article = this.createArticle(Mappers.toArticle(datum));
      this.content.appendChild(article);
    });
  }

  createLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    return loader;
  }

  addLoader() {
    this.content.appendChild(this.loader);
  }
}