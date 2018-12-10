import React, { Component } from 'react';

import NewsModule from './modules/news/NewsModule';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <main className='app'>
          <NewsModule>
          </NewsModule>
        </main>
        <footer>
          <div className='attribution'>
            <p>Sorry, lads, but we are</p>
            <a href='https://newsapi.org'>Powered by News API</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
