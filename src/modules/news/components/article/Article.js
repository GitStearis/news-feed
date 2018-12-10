import React from 'react';

import './Article.css';

function Article(props) {
  const {
    href,
    image,
    title,
    description
  } = props.content;
  return (
    <article>
      <a href={href}>
        <div className='content'>
          <h2 className='title'>{title}</h2>
          <p className='description'>{description}</p>
        </div>
      </a>
      <img src={image} alt='article background'></img>
    </article>
  );
}

export default Article;