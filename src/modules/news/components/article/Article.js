import React, { Component } from 'react';

import './Article.css';

class Article extends Component {
  render() {
    return (
      <article>
        <img src='https://img.tyt.by/n/prezident/02/e/lukashenko_novyy_most_gomelskaya_oblast_2018.jpg' alt='Article image'></img>
        <a href='https://news.tut.by/economics/617571.html'>
          <div className='content'>
            <h2 className='title'>Random caption</h2>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor est nisl, sed blandit ligula euismod vitae. Integer at pulvinar mi. In sed lacus justo. Vivamus sed tincidunt turpis. Nulla facilisi. Quisque sit amet gravida dolor. Sed blandit odio nec mauris dapibus, id pretium odio dictum. Nunc quis bibendum metus, quis egestas purus.</p>
          </div>
        </a>
      </article>
    );
  }
}

export default Article;