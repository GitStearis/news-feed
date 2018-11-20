class TabbedComponent {
  constructor(id, config) {
    this.config = config;
    this.loader = this.createLoader();

    this.component = document.getElementById(id);
    this.createButtons();
    this.createContent();
  }

  selectFirstTab() {
    this.buttons.firstElementChild.click();
  }

  handleClick(button, onClick) {
    button.addEventListener('click', onClick);
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

  createButtons() {
    this.buttons = document.createElement('div');
    this.buttons.className = 'tab-buttons';
    this.inititalizeButtons();
    this.component.appendChild(this.buttons);
  }

  createContent() {
    this.content = document.createElement('section');
    this.content.className = 'tab-content';
    this.component.appendChild(this.content);
  }

  createLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    return loader;
  }

  addLoader() {
    this.content.appendChild(this.loader);
  }

  render(data) {
    this.clearContent();
    data.forEach(datum => {
      const article = new ArticleComponent(Mappers.toArticle(datum)).render();
      this.content.appendChild(article);
    });
  }
}